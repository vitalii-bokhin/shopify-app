export default function Header(props) {
    return props.appLoading ? (
        <div className='Polaris-TopBar_z6tf9'
            dangerouslySetInnerHTML={{
                __html: `<div class="Polaris-TopBar__ContextControl_3di0f"><div class="pIYWy"><div><img alt="Shopify Editions" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/a4a13e14ced76e48.svg" class="CHSY2"><img alt="Shopify Editions" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/13c99562e1ba017f.svg" class="m9n8p"></div></div></div><div class="Polaris-TopBar__Contents_1u1wn"><div class="Polaris-TopBar__SearchField_ek145"><div class="wxQ_9"></div></div><div class="Polaris-TopBar__SecondaryMenu_7y4ay"></div><div class="fTqdT"><div class="WO7Ww"></div><div class="SNQXW"></div></div></div>`
            }}
        />
    ) : (
        <div dangerouslySetInnerHTML={{
            __html: `<div>
                <div class="Polaris-TopBar_z6tf9"><button type="button" class="Polaris-TopBar__NavigationIcon_1bdcy"
                    aria-label="Toggle menu">
                    <div class="Polaris-TopBar__IconWrapper_1kb6z"><span class="Polaris-Icon_yj27d"><span
                        class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                        class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                        <path
                            d="M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z">
                        </path>
                        </svg></span></div>
                </button>
                <div class="Polaris-TopBar__ContextControl_3di0f">
                    <div class="xtW1C">
                    <div class="Y90id"><img alt="Shopify Editions"
                        src="https://cdn.shopify.com/shopifycloud/web/assets/v1/25975bcbbdd6d48f.svg" class="HpTKZ xa0qG"><img
                        alt="Shopify Editions" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/13c99562e1ba017f.svg"
                        class="BCsv_"></div>
                    <div class="Di55P lnOmq xa0qG"><a
                        href="https://www.shopify.com/editions/winter2023?utm_content=merchant&amp;utm_medium=badge&amp;utm_source=admin&amp;utm_campaign=editions_winter23"
                        target="_blank" rel="noopener noreferrer" data-polaris-unstyled="true"><span class="bBmk8">Winter
                            ‘23</span></a></div>
                    </div>
                </div>
                <div class="Polaris-TopBar__Contents_1u1wn">
                    <div class="Polaris-TopBar__SearchField_ek145">
                    <div><button type="button" class="Kq5q1"><span class="cTtDT"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9.707 4.293-4.82-4.82a5.968 5.968 0 0 0 1.113-3.473 6 6 0 0 0-12 0 6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z">
                                </path>
                            </svg></span></span><span class="zDkMR" title="Search">Search</span></button></div>
                    </div>
                    <div class="Polaris-TopBar__SecondaryMenu_7y4ay">
                    <div class="WQAz1">
                        <div>
                        <div class="_o7tR"><button type="button" class="igRJK" aria-label="Alerts Feed - 0 unread alerts"
                            tabindex="0" aria-controls="Polarispopover1" aria-owns="Polarispopover1" aria-expanded="false"><span
                                class="Polaris-Icon_yj27d Polaris-Icon--colorBase_nqlaq Polaris-Icon--applyColor_2y25n"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                    d="M10 0a1 1 0 0 1 1 1v2.032l-.001.021-.002.03a6.002 6.002 0 0 1 5.003 5.917c0 3.093.625 4.312 1.599 6.21l.034.068c.17.33-.07.722-.442.722h-14.382a.496.496 0 0 1-.442-.722l.034-.068c.974-1.898 1.599-3.117 1.599-6.21a6.002 6.002 0 0 1 5.003-5.918l-.002-.04a.835.835 0 0 1-.001-.042v-2a1 1 0 0 1 1-1zm2 18a2 2 0 0 1-4 0h4z">
                                </path>
                                </svg></span></button></div>
                        </div>
                    </div>
                    </div>
                    <div class="UserMenuContainer">
                    <div>
                        <div class="Polaris-TopBar-Menu__ActivatorWrapper_1gxxh"><button type="button"
                            class="Polaris-TopBar-Menu__Activator_e3w0d" tabindex="0" aria-controls="Polarispopover2"
                            aria-owns="Polarispopover2" aria-expanded="false">
                            <div class="Polaris-MessageIndicator__MessageIndicatorWrapper_152yb"><span
                                aria-label="Avatar with initials T Y" role="img"
                                class="Polaris-Avatar_z763p Polaris-Avatar--sizeSmall_7647q Polaris-Avatar--imageHasLoaded_1bsq5 Polaris-Avatar--shapeRound_2651c"><img
                                alt=""
                                src="https://cdn.shopify.com/s/files/1/0573/5845/0824/users/avatar_250x250_crop_center_b8134921-0a72-45d3-8ff9-1190c310cc45_128x.png?v=1669542603"
                                class="Polaris-Avatar__Image_2qgms" role="presentation"></span></div><span
                            class="Polaris-TopBar-UserMenu__Details_1bdkj">
                            <p
                                class="Polaris-Text--root_yj4ah Polaris-Text--medium_oli4o Polaris-Text--block_32woz Polaris-Text--start_30ir5 Polaris-Text--truncate_4qxon">
                                Tetyana Yarchak</p>
                            <p
                                class="Polaris-Text--root_yj4ah Polaris-Text--bodySm_nvqxj Polaris-Text--block_32woz Polaris-Text--start_30ir5 Polaris-Text--subdued_17vaa Polaris-Text--truncate_4qxon">
                            </p>
                            </span>
                        </button></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>`
        }}
        />
    );
}
