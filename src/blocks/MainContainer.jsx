import AverageOrderBlock from './AverageOrderBlock';
import CohortBlock from './CohortBlock';
import ConversionRateBlock from './ConversionRateBlock';
import TotalSalesBlock from './TotalSalesBlock';
import SalesBySocialBlock from './SalesBySocialBlock';
import SalesByTrafficSourceBlock from './SalesByTrafficSourceBlock';
import SalesToMarketBlock from './SalesToMarketBlock';
import SessionsBlock from './SessionsBlock';
import SessionsByDeviceBlock from './SessionsByDeviceBlock';
import SessionsByLocationBlock from './SessionsByLocationBlock';
import SessionsBySocialBlock from './SessionsBySocialBlock';
import SessionsByTrafficBlock from './SessionsByTrafficBlock';
import ReturningCustomerBlock from './ReturningCustomerBlock';
import TopBar from './TopBar';
import TopLandingsBySessionsBlock from './TopLandingsBySessionsBlock';
import TopProductsBlock from './TopProductsBlock';
import TopReferrersBySessionsBlock from './TopReferrersBySessionsBlock';
import TotalOrdersBlock from './TotalOrdersBlock';

export default function MainContainer({ appLoading, isLoading, data }) {
    return appLoading ? <></> : (
        <>
            <div dangerouslySetInnerHTML={{
                __html: `<div class="Polaris-Box_375yx"
                style="--pc-box-padding-block-end-xs:var(--p-space-4); --pc-box-padding-block-end-md:var(--p-space-5); --pc-box-padding-block-start-xs:var(--p-space-4); --pc-box-padding-block-start-md:var(--p-space-5); --pc-box-padding-inline-start-xs:var(--p-space-4); --pc-box-padding-inline-start-sm:var(--p-space-0); --pc-box-padding-inline-end-xs:var(--p-space-4); --pc-box-padding-inline-end-sm:var(--p-space-0); position: relative;">
                <div class="Polaris-Page-Header--noBreadcrumbs_bdstf Polaris-Page-Header--mediumTitle_bfol6">
                  <div class="Polaris-Page-Header__Row_375v7">
                    <div class="Polaris-Page-Header__TitleWrapper_bejfn">
                      <h1 class="Polaris-Header-Title_2qj8j">Analytics</h1>
                    </div>
                    <div class="Polaris-Page-Header__RightAlign_1ok1p">
                      <div class="Polaris-ActionMenu_1hlnt">
                        <div class="Polaris-ActionMenu-Actions__ActionsLayout_w56ri">
                          <div class="Polaris-ButtonGroup_yy85z Polaris-ButtonGroup--extraTight_1xh3x">
                            <div class="Polaris-ButtonGroup__Item_yiyol"><span
                                class="Polaris-ActionMenu-SecondaryAction_1dl4i"><button class="Polaris-Button_r99lw"
                                  type="button"><span class="Polaris-Button__Content_xd1mk"><span
                                      class="Polaris-Button__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                          class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                                          viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false"
                                          aria-hidden="true">
                                          <path
                                            d="M4.5 3a1.5 1.5 0 0 0-1.5 1.5v2.5a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2.5zm-1.5 12.5a1.5 1.5 0 0 0 1.5 1.5h2.5a1 1 0 1 0 0-2h-2v-2a1 1 0 1 0-2 0v2.5zm14 0a1.5 1.5 0 0 1-1.5 1.5h-2.5a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2.5zm0-11a1.5 1.5 0 0 0-1.5-1.5h-2.5a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2.5z">
                                          </path>
                                        </svg></span></span><span class="Polaris-Button__Text_yj3uv">Enter
                                      fullscreen</span></span></button></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
            }} />

            <TopBar />

            <div className="CNvJk">
                <div className="MlLnN">
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover5" aria-owns="Polarispopover5"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Total sales</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <TotalSalesBlock
                                            type="sales"
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover6" aria-owns="Polarispopover6"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Conversion rate</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <ConversionRateBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover7" aria-owns="Polarispopover7"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Total orders</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <TotalOrdersBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4">Sessions by device
                                                    type</h2>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sessions by device type report"
                                                href="/admin/reports/sessions_by_device?since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SessionsByDeviceBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover8" aria-owns="Polarispopover8"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sessions by social source</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sessions by social source report"
                                                href="/admin/reports/sessions_by_referrer?referrer_source=Social&amp;since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SessionsBySocialBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover9" aria-owns="Polarispopover9"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sales attributed to marketing</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SalesToMarketBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MlLnN">
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover10" aria-owns="Polarispopover10"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sessions</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sessions report"
                                                href="/admin/reports/sessions_over_time?since=2023-03-13&amp;until=2023-03-13&amp;over=hour">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SessionsBlock
                                            type="sessions"
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover11" aria-owns="Polarispopover11"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Average order value</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <AverageOrderBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover12" aria-owns="Polarispopover12"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Top products by units sold</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <TopProductsBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover13" aria-owns="Polarispopover13"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sessions by traffic source</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sessions by traffic source report"
                                                href="/admin/reports/sessions_by_referrer?since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SessionsByTrafficBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover14" aria-owns="Polarispopover14"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sales by social source</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sales by social source report"
                                                href="/admin/reports/sales_by_referrer?referrer_source=Social&amp;since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SalesBySocialBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover15" aria-owns="Polarispopover15"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Top referrers by sessions</span></h2>
                                                </button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <TopReferrersBySessionsBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MlLnN">
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover16" aria-owns="Polarispopover16"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Returning customer rate</span></h2>
                                                </button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <ReturningCustomerBlock
                                            type="return_customer_rate"
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover17" aria-owns="Polarispopover17"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Customer cohort analysis</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <CohortBlock />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4">Sessions by
                                                    location</h2>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Sessions by location report"
                                                href="/admin/reports/sessions_by_location?since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SessionsByLocationBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover18" aria-owns="Polarispopover18"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Sales by traffic source</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <SalesByTrafficSourceBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Grvl1">
                        <div className="Polaris-LegacyCard_l5l93">
                            <div className="Polaris-LegacyCard__Section_1b1h1">
                                <div
                                    className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj Polaris-LegacyStack--spacingTight_1o4d6">
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <div className="Ljc49">
                                            <div className="BUWUC">
                                                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                                                    tabIndex="0" aria-controls="Polarispopover19" aria-owns="Polarispopover19"
                                                    aria-expanded="false">
                                                    <h2 className="Polaris-Text--root_yj4ah Polaris-Text--headingMd_lwjt4"><span
                                                        className="vrNiM">Top landing pages by sessions</span></h2>
                                                </button></div>
                                            </div>
                                            <div className="KKRBh"><a data-polaris-unstyled="true"
                                                className="Polaris-Link_yj5sy Polaris-Link--removeUnderline_adav6"
                                                aria-label="View the Top landing pages by sessions report"
                                                href="/admin/reports/sessions_by_landing_page?since=2023-03-13&amp;until=2023-03-13">View
                                                report</a></div>
                                        </div>
                                    </div>
                                    <div className="Polaris-LegacyStack__Item_yiyol">
                                        <TopLandingsBySessionsBlock
                                            isLoading={isLoading}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Polaris-FooterHelp_10cj9">
                <div className="Polaris-FooterHelp__Text_yj3uv">Learn more about <a
                    href="https://help.shopify.com/manual/reports-and-analytics/shopify-reports/overview-dashboard"
                    target="_blank" rel="noopener noreferrer" data-polaris-unstyled="true"
                    className="Polaris-Link_yj5sy">overview dashboard</a>.
                </div>
            </div>
        </>
    );
};
