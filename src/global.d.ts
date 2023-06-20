export { };

declare global {
    type DateItem = {
        date: string;
        cart: number;
        checkout: number;
        converted_sessions: number;
        orders: number;
        return_customer_rate: number;
        sales: number;
        sessions: number;
        visitors: number;
        first_time: number;
        sales_to_market: number;
    };

    type UserData = {
        dates: DateItem[];
        ordersCount: number;
        userName: string;
        avatar: string;
    }

    type IncomingDataItem = {
        date: string | number | Date;
        addedToCart: any;
        reachedCheckout: any;
        sessionConverted: any;
        totalOrders: any;
        totalSalesPerDay: any;
        sessions: any;
        visitors: any;
    };

    type QueryArgs = {
        endpoint?: string;
        body?: any;
    };

    type SettingsResult = {
        currentUserId: number;
        usersSettings: {
            id: number;
            ordersCount: number;
        }[];
        countries?: string[];
    };

    type DateRange = {
        alias: string;
        title: string;
        period: {
            from: string;
            to: string;
            btnTitle?: string;
        };
    }
}