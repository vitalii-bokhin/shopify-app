import DatePickersContainerComponent from '../components/datepickers/DatePickersContainerComponent';

export default function TopBar() {
    return (
        <div className="zj7a3">

            <DatePickersContainerComponent />

            <div className="bNYh2"><label className="Polaris-Choice_j5gzq Polaris-Choice--disabled_hcuh9"
                htmlFor="PolarisCheckbox1"><span className="Polaris-Choice__Control_1u8vs"><span
                    className="Polaris-Checkbox_1d6zr"><input id="PolarisCheckbox1" type="checkbox" disabled=""
                        className="Polaris-Checkbox__Input_30ock" aria-invalid="false" role="checkbox"
                        aria-checked="false" value="overview-dashboard-auto-refresh-data" />
                    <span className="Polaris-Checkbox__Backdrop_1x2i2"></span><span
                        className="Polaris-Checkbox__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                            className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                                viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                                aria-hidden="true">
                                <path
                                    d="M14.723 6.237a.94.94 0 0 1 .053 1.277l-5.366 6.193a.834.834 0 0 1-.611.293.83.83 0 0 1-.622-.264l-2.927-3.097a.94.94 0 0 1 0-1.278.82.82 0 0 1 1.207 0l2.297 2.43 4.763-5.498a.821.821 0 0 1 1.206-.056Z">
                                </path>
                            </svg></span></span></span></span><span
                                className="Polaris-Choice__Label_2vd36"><span>Auto-refresh</span></span></label><span tabIndex="0" aria-describedby="PolarisTooltipContent2" data-polaris-tooltip-activator="true"><span
                                    className="Polaris-Icon_yj27d Polaris-Icon--colorBase_nqlaq Polaris-Icon--applyColor_2y25n"><span
                                        className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                                            viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M11 11h-2v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 0 0-2 0h-2c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2h-2v2zm1-13a8 8 0 1 0 0 16 8 8 0 0 0 0-16z">
                                        </path>
                                    </svg>
                                </span>
                </span>
            </div>
        </div>
    );
}
