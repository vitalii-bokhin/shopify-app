import { createApi } from '@reduxjs/toolkit/query/react';
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import formatDateToYearMonthDayDateString from '../features/formatDateToYearMonthDayDateString';
import randomInt from '../features/randomInt';

const firebaseConfig = {
    apiKey: "AIzaSyD3-Dggsh_sBjubQhflKmmLv22MCNqyys4",
    authDomain: "saapp-1d219.firebaseapp.com",
    projectId: "saapp-1d219",
    storageBucket: "saapp-1d219.appspot.com",
    messagingSenderId: "307777996192",
    appId: "1:307777996192:web:d09930c1f8ea819bc1d0c5",
    measurementId: "G-NLKM4ZZXQK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firestoreQuery = () => async ({ endpoint, body }: QueryArgs) => {
    switch (endpoint) {
        case 'userDates':
            const currUserDoc = await getDoc(doc(db, 'activeUser', 'currentUser'));
            const currUserData: any = currUserDoc.data();

            const docSnapshot = await getDoc(doc(db, 'users', String(currUserData.currentUserId)));
            const result: any = docSnapshot.data();
            return {
                data: {
                    data: result,
                    currUserData,
                },
            };

        case 'settings':
            const currentUserSnapshot = await getDoc(doc(db, 'activeUser', 'currentUser'));
            const currentUserResult: any = currentUserSnapshot.data();

            const usersSnapshot = await getDocs(collection(db, 'users'));
            const usersResult = usersSnapshot.docs.map((doc) => {
                const docData = doc.data();

                return {
                    id: doc.id,
                    ordersCount: docData.ordersCount,
                };
            });

            return {
                data: {
                    currentUserId: currentUserResult.currentUserId,
                    usersSettings: usersResult,
                    countries: currentUserResult.countries,
                    products: currentUserResult.products,
                    device_type: currentUserResult.device_type,
                    landing_pages: currentUserResult.landing_pages,
                    referrers: currentUserResult.referrers,
                    sales_social_source: currentUserResult.sales_social_source,
                    sales_traffic_source: currentUserResult.sales_traffic_source,
                    social_source: currentUserResult.social_source,
                    traffic_source: currentUserResult.traffic_source,
                },
            };

        case 'updateSettings':
            const curUserDocRef = doc(db, 'activeUser', 'currentUser');
            await updateDoc(curUserDocRef, { currentUserId: body.currentUserId });

            for (const item of body.usersSettings) {
                const userDocRef = doc(db, 'users', String(item.id));
                await updateDoc(userDocRef, { ordersCount: item.ordersCount });
            }

            return {
                data: body,
            };
    }

}

export const userFirestoreApi = createApi({
    reducerPath: 'userFirestoreApi',
    baseQuery: firestoreQuery(),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getData: builder.query<UserData, void>({
            query: (params) => ({ endpoint: 'userDates' }),
            transformResponse: (result) => {
                result.data.dates = result.data.dates.map((item: IncomingDataItem) => {

                    const sales = (item.totalOrders ?? 0) * (result.currUserData.minItemCost ?? 0);
                    const first_time = item.visitors - randomInt(10, item.visitors);
                    const sales_to_market = sales - randomInt(100, sales);

                    return {
                        date: formatDateToYearMonthDayDateString(new Date(item.date)),
                        cart: item.addedToCart || 0,
                        checkout: item.reachedCheckout || 0,
                        converted_sessions: item.sessionConverted || 0,
                        orders: item.totalOrders || 0,
                        return_customer_rate: randomInt(1, 10) || 0, // percentage
                        sales,
                        sessions: item.sessions || 0,
                        visitors: item.visitors || 0,
                        first_time: first_time < 0 ? 0 : first_time,
                        sales_to_market: sales_to_market < 0 ? 0 : sales_to_market,
                    };
                });

                return result.data;
            },
            providesTags: ['Users'],
        }),
        getSettings: builder.query<SettingsResult, void>({
            query: () => ({ endpoint: 'settings' }),
            providesTags: ['Users'],
        }),
        updateSettings: builder.mutation<SettingsResult, SettingsResult>({
            query: (body) => ({ endpoint: 'updateSettings', body }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const { useGetDataQuery, useLazyGetSettingsQuery, useGetSettingsQuery, useUpdateSettingsMutation } = userFirestoreApi;