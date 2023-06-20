import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import randomInt from '../app/features/randomInt';
import ContentLoader from '../components/ContentLoader';
import formatDateToString from 'src/app/features/formatDateToString';

export default function CohortBlock() {
    const mainPeriod = useSelector((state) => state.datepicker.mainRange.period);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const [dataFetching, dataFetchingState] = useState(true);

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod, comparativePeriod]);

    const data = {};
    data.all = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.sep = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.oct = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.nov = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.dec = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.jan = ['100', randomInt(0, 100), randomInt(0, 100), ''];
    data.feb = ['100', randomInt(0, 100), randomInt(0, 100), ''];

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const month = data[key];
            data[key] = month.map(item => item + '%');
        }
    }

    // add months to items
    const keys = ['sep', 'oct', 'nov', 'dec', 'jan', 'feb'];
    keys.reverse();
    keys.forEach((k, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - (i + 1));
        data[k][3] = formatDateToString(d, { year: 'numeric', month: 'short' });
    });

    const { all, sep, oct, nov, dec, jan, feb } = data;

    return dataFetching ? <ContentLoader /> : (
        <div dangerouslySetInnerHTML={{
            __html: `<div class="Polaris-AlphaStack_1x5dy"
            style="--pc-stack-inline-align:start; --pc-stack-order:column; --pc-stack-gap-xs:var(--p-space-4);">
            <div class="osPSi">
                <div class="Polaris-DataTable--condensed_b60cb Polaris-DataTable__IncreasedTableDensity_vzwx6">
                    <div class="Polaris-DataTable_1pikz Polaris-DataTable--condensed_b60cb">
                        <div class="Polaris-DataTable__ScrollContainer_lf5n1">
                            <table class="Polaris-DataTable__FixedFirstColumn_1h5ss" style="width: 84px;">
                                <thead>
                                    <tr style="height: 33px;">
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he"
                                            scope="col">
                                            <div class="i3PKV X7vvh gZCaa"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Cohort</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV zy5dk gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m">All</span>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV DoWM7 gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${sep[3]}</span></div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${oct[3]}</span></div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${nov[3]}</span></div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${dec[3]}</span></div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${jan[3]}</span></div>
                                        </th>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${feb[3]}</span></div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="Polaris-DataTable__Table_2qj3m">
                                <thead>
                                    <tr>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he"
                                            scope="col">
                                            <div class="i3PKV X7vvh gZCaa"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Cohort</span>
                                            </div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    0</span></div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    1</span></div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    2</span></div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    3</span></div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    4</span></div>
                                        </th>
                                        <th data-polaris-header-cell="true"
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--header_sv8he Polaris-DataTable__Cell--numeric_1ld9f"
                                            scope="col">
                                            <div class="i3PKV X7vvh"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--medium_oli4o">Month
                                                    5</span></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV zy5dk gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m">All</span>
                                            </div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m">${all[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m">${all[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m">${all[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV zy5dk GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--semibold_k1k0m"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV DoWM7 gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${sep[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7 pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${sep[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${sep[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${sep[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV DoWM7 GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${oct[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${oct[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${oct[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${oct[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${nov[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${nov[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${nov[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${nov[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${dec[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${dec[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${dec[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${dec[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${jan[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${jan[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${jan[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${jan[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="Polaris-DataTable__TableRow_1a85o">
                                        <th class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--firstColumn_2o4gk"
                                            scope="row">
                                            <div class="i3PKV gZCaa" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${feb[3]}</span></div>
                                        </th>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV pl0lj" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${feb[0]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${feb[1]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0">${feb[2]}</span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                        <td
                                            class="Polaris-DataTable__Cell_yixs7 Polaris-DataTable__Cell--verticalAlignTop_1042b Polaris-DataTable__Cell--numeric_1ld9f">
                                            <div class="i3PKV GPs24" style="height: 25.7143px;"><span
                                                    class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann Polaris-Text--regular_pjgr0"></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="POrjX">
                <div><button aria-describedby="DefinitionPopoverContent1" type="button" class="krQ22" tabIndex="0"
                        aria-controls="Polarispopover203" aria-owns="Polarispopover203" aria-expanded="false"><span
                            class="IQgNA"><span class="vrNiM">Last 6 months</span></span></button></div><span
                    class="QGb2g">September 2022 – February 2023</span>
            </div>
        </div>`
        }} />
    );
};