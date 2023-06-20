import { Badge } from '@shopify/polaris';
import SettingsModal from 'src/components/modals/SettingsModal';

export default function Sidebar(props: { appLoading: boolean; ordersCount: number; }) {
  return props.appLoading ? (
    <nav className='Polaris-Navigation_1ajsq'
      dangerouslySetInnerHTML={{
        __html: `<div class="Polaris-Navigation__PrimaryNavigation_1i4zc Polaris-Scrollable_1ed9o Polaris-Scrollable--vertical_uiuuj Polaris-Scrollable--horizontal_17qq4"
                data-polaris-scrollable="true">
                <ul class="Polaris-Navigation__Section_1b1h1 Polaris-Navigation__Section--fill_kzgyz">
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M10.555 3.168a1 1 0 0 0-1.11 0l-5.554 3.702a2 2 0 0 0-.891 1.665v6.465a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2v-6.465a2 2 0 0 0-.89-1.664l-5.555-3.703Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Home</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M3.735 5.507a3 3 0 0 1 2.96-2.507h6.61a3 3 0 0 1 2.96 2.507l.735 4.493v5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-5l.735-4.493Zm2.96-.507a1 1 0 0 0-.987.836l-.708 4.164v1h1.394a3 3 0 0 1 1.665.504l.832.555a2 2 0 0 0 2.218 0l.832-.555a3 3 0 0 1 1.666-.504h1.393v-1l-.708-4.164a1 1 0 0 0-.986-.836h-6.612Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Orders</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M10.408 3h5.592a1 1 0 0 1 1 1v5.592a2 2 0 0 1-.57 1.399l-5.162 5.277a2.5 2.5 0 0 1-3.536 0l-4-4a2.5 2.5 0 0 1 0-3.536l.008-.008 5.27-5.154a2 2 0 0 1 1.397-.57Zm3.092 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Products</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.5 8a2.5 2.5 0 0 1-1.768-4.268c.59-.577 2.468-1.732 5.268-1.732s4.678 1.155 5.268 1.732a2.5 2.5 0 0 1-1.768 4.268h-7Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Customers</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-6Zm3 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm13-1a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm-4.388-8.435a1 1 0 0 1 1.8-.012l1.479 3.005a1 1 0 0 1-.898 1.442h-5.993c-.862 0-1.313-1.019-.74-1.664l.69-.996a.993.993 0 0 1 1.5 0l.418.51a.5.5 0 0 0 .828-.142l.916-2.143Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Content</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M7 11a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Zm4-5a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-10Zm4-2a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-12Zm-12 4a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-8Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Analytics</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M9 4a5 5 0 0 0-.163 9.997l.662 1.986a7 7 0 1 1 6.484-6.484l-1.986-.662a5 5 0 0 0-4.997-4.837Z">
                                </path>
                                <path d="M9 8a1 1 0 0 0 0 2v2a3 3 0 1 1 3-3h-2a1 1 0 0 0-1-1Z"></path>
                                <path
                                  d="M11.316 10.051a1 1 0 0 0-1.265 1.265l2 6a1 1 0 0 0 1.898 0l.842-2.525 2.525-.842a1 1 0 0 0 0-1.898l-6-2Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Marketing</span>
                        </button></div>
                    </div>
                  </li>
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M6 3.072a2 2 0 0 0-.99 1.939 2 2 0 0 0-1.826 3.163 2 2 0 0 0 0 3.652 2 2 0 0 0 1.826 3.164 2 2 0 0 0 3.164 1.828 2 2 0 0 0 3.652 0 2 2 0 0 0 3.164-1.827 2 2 0 0 0 1.826-3.164 2 2 0 0 0 0-3.652 2 2 0 0 0-1.826-3.165 2 2 0 0 0-3.163-1.826 2 2 0 0 0-3.654 0 2 2 0 0 0-2.173-.112Zm6.832 4.483a1 1 0 1 0-1.664-1.11l-4 6a1 1 0 0 0 1.664 1.11l4-6Zm-5.832 1.445a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Discounts</span>
                        </button></div>
                    </div>
                  </li>
                </ul>
                <ul class="Polaris-Navigation__Section_1b1h1">
                  <li class="Polaris-Navigation__ListItem_wxd2m">
                    <div class="Polaris-Navigation__ItemWrapper_1kbav">
                      <div class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerDisabled_1q21d"><button
                          type="button" class="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--disabled_1is1z" disabled=""
                          aria-disabled="true">
                          <div class="Polaris-Navigation__Icon_yj27d"><span class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm7.476-1.246c-1.394-.754-1.394-2.754 0-3.508a1 1 0 0 0 .376-1.404l-1.067-1.733a1 1 0 0 0-1.327-.355l-.447.243c-1.329.719-2.945-.244-2.945-1.755v-.242a1 1 0 0 0-1-1h-2.132a1 1 0 0 0-1 1v.242c0 1.511-1.616 2.474-2.945 1.755l-.447-.243a1 1 0 0 0-1.327.355l-1.067 1.733a1 1 0 0 0 .376 1.404c1.394.754 1.394 2.754 0 3.508a1 1 0 0 0-.376 1.404l1.067 1.733a1 1 0 0 0 1.327.355l.447-.243c1.329-.719 2.945.244 2.945 1.755v.242a1 1 0 0 0 1 1h2.132a1 1 0 0 0 1-1v-.242c0-1.511 1.616-2.474 2.945-1.755l.447.243a1 1 0 0 0 1.327-.355l1.067-1.733a1 1 0 0 0-.376-1.404z">
                                </path>
                              </svg></span></div><span class="Polaris-Navigation__Text_yj3uv">Settings</span>
                        </button></div>
                    </div>
                  </li>
                </ul>
              </div>`
      }}
    />
  ) : (
    <nav className="Polaris-Navigation_1ajsq">
      <div className="Polaris-Navigation__PrimaryNavigation_1i4zc Polaris-Scrollable_1ed9o Polaris-Scrollable--vertical_uiuuj Polaris-Scrollable--horizontal_17qq4"
        data-polaris-scrollable="true">
        <div>
          <ul className="Polaris-Navigation__Section_1b1h1">
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" href="/admin">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path
                        d="M10.555 3.168a1 1 0 0 0-1.11 0l-5.554 3.702a2 2 0 0 0-.891 1.665v6.465a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2v-6.465a2 2 0 0 0-.89-1.664l-5.555-3.703Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Home</span>
                </a></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" aria-expanded="false"
                  aria-controls="PolarisSecondaryNavigation11" href="/admin/orders">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path
                        d="M3.735 5.507a3 3 0 0 1 2.96-2.507h6.61a3 3 0 0 1 2.96 2.507l.735 4.493v5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-5l.735-4.493Zm2.96-.507a1 1 0 0 0-.987.836l-.708 4.164v1h1.394a3 3 0 0 1 1.665.504l.832.555a2 2 0 0 0 2.218 0l.832-.555a3 3 0 0 1 1.666-.504h1.393v-1l-.708-4.164a1 1 0 0 0-.986-.836h-6.612Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Orders</span>
                  <div className="Polaris-Navigation__Badge_2qgie">
                    <Badge>{String(props.ordersCount)}</Badge>
                  </div>
                </a></div>
              </div>
              <div className="Polaris-Navigation__SecondaryNavigation_na5at">
                <div id="PolarisSecondaryNavigation11"
                  className="Polaris-Collapsible_1dqql Polaris-Collapsible--isFullyClosed_dljrt" aria-hidden="true"
                  style={{ maxHeight: 0, overflow: 'hidden' }}></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" aria-expanded="false"
                  aria-controls="PolarisSecondaryNavigation13" href="/admin/products">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path
                        d="M10.408 3h5.592a1 1 0 0 1 1 1v5.592a2 2 0 0 1-.57 1.399l-5.162 5.277a2.5 2.5 0 0 1-3.536 0l-4-4a2.5 2.5 0 0 1 0-3.536l.008-.008 5.27-5.154a2 2 0 0 1 1.397-.57Zm3.092 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Products</span>
                </a></div>
              </div>
              <div className="Polaris-Navigation__SecondaryNavigation_na5at">
                <div id="PolarisSecondaryNavigation13"
                  className="Polaris-Collapsible_1dqql Polaris-Collapsible--isFullyClosed_dljrt" aria-hidden="true"
                  style={{ maxHeight: 0, overflow: 'hidden' }}></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" href="/admin/customers">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path
                        d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.5 8a2.5 2.5 0 0 1-1.768-4.268c.59-.577 2.468-1.732 5.268-1.732s4.678 1.155 5.268 1.732a2.5 2.5 0 0 1-1.768 4.268h-7Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Customers</span>
                </a></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" aria-expanded="false"
                  aria-controls="PolarisSecondaryNavigation16" href="/admin/content/files">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-6Zm3 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm13-1a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm-4.388-8.435a1 1 0 0 1 1.8-.012l1.479 3.005a1 1 0 0 1-.898 1.442h-5.993c-.862 0-1.313-1.019-.74-1.664l.69-.996a.993.993 0 0 1 1.5 0l.418.51a.5.5 0 0 0 .828-.142l.916-2.143Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Content</span>
                </a></div>
              </div>
              <div className="Polaris-Navigation__SecondaryNavigation_na5at">
                <div id="PolarisSecondaryNavigation16"
                  className="Polaris-Collapsible_1dqql Polaris-Collapsible--isFullyClosed_dljrt" aria-hidden="true"
                  style={{ maxHeight: 0, overflow: 'hidden' }}></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div
                  className="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation__ItemInnerWrapper--selected_27m8g">
                  <a data-polaris-unstyled="true"
                    className="Polaris-Navigation__Item_yiyol Polaris-Navigation__Item--selected_13f25 Polaris-Navigation--subNavigationActive_e2t9x"
                    tabIndex={0} aria-disabled="false" aria-expanded="true" aria-controls="PolarisSecondaryNavigation18"
                    href="/admin/dashboards">
                    <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                        viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                        <path
                          d="M7 11a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Zm4-5a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-10Zm4-2a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-12Zm-12 4a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-8Z">
                        </path>
                      </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Analytics</span>
                  </a></div>
              </div>
              <div className="Polaris-Navigation__SecondaryNavigation_na5at">
                <div id="PolarisSecondaryNavigation18" className="Polaris-Collapsible_1dqql" aria-hidden="false"
                  style={{ maxHeight: 'none', overflow: 'visible' }}>
                  <ul className="Polaris-Navigation__List_yj3nl">
                    <li className="Polaris-Navigation__ListItem_wxd2m">
                      <div className="Polaris-Navigation__ItemWrapper_1kbav">
                        <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                          className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false"
                          href="/admin/reports"><span className="Polaris-Navigation__Text_yj3uv">Reports</span></a></div>
                      </div>
                    </li>
                    <li className="Polaris-Navigation__ListItem_wxd2m">
                      <div className="Polaris-Navigation__ItemWrapper_1kbav">
                        <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                          className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false"
                          href="/admin/dashboards/live"><span className="Polaris-Navigation__Text_yj3uv">Live
                            View</span></a></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" aria-expanded="false"
                  aria-controls="PolarisSecondaryNavigation22" href="/admin/marketing">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path
                        d="M9 4a5 5 0 0 0-.163 9.997l.662 1.986a7 7 0 1 1 6.484-6.484l-1.986-.662a5 5 0 0 0-4.997-4.837Z">
                      </path>
                      <path d="M9 8a1 1 0 0 0 0 2v2a3 3 0 1 1 3-3h-2a1 1 0 0 0-1-1Z"></path>
                      <path
                        d="M11.316 10.051a1 1 0 0 0-1.265 1.265l2 6a1 1 0 0 0 1.898 0l.842-2.525 2.525-.842a1 1 0 0 0 0-1.898l-6-2Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Marketing</span>
                </a></div>
              </div>
              <div className="Polaris-Navigation__SecondaryNavigation_na5at">
                <div id="PolarisSecondaryNavigation22"
                  className="Polaris-Collapsible_1dqql Polaris-Collapsible--isFullyClosed_dljrt" aria-hidden="true"
                  style={{ maxHeight: 0, overflow: 'hidden' }}></div>
              </div>
            </li>
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf"><a data-polaris-unstyled="true"
                  className="Polaris-Navigation__Item_yiyol" tabIndex={0} aria-disabled="false" href="/admin/discounts">
                  <div className="Polaris-Navigation__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M6 3.072a2 2 0 0 0-.99 1.939 2 2 0 0 0-1.826 3.163 2 2 0 0 0 0 3.652 2 2 0 0 0 1.826 3.164 2 2 0 0 0 3.164 1.828 2 2 0 0 0 3.652 0 2 2 0 0 0 3.164-1.827 2 2 0 0 0 1.826-3.164 2 2 0 0 0 0-3.652 2 2 0 0 0-1.826-3.165 2 2 0 0 0-3.163-1.826 2 2 0 0 0-3.654 0 2 2 0 0 0-2.173-.112Zm6.832 4.483a1 1 0 1 0-1.664-1.11l-4 6a1 1 0 0 0 1.664 1.11l4-6Zm-5.832 1.445a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
                      </path>
                    </svg></span></div><span className="Polaris-Navigation__Text_yj3uv">Discounts</span>
                </a></div>
              </div>
            </li>
          </ul>
        </div>

        <ul
          className="qVH5c"
          dangerouslySetInnerHTML={{
            __html: `<li class="IypnU">
                      <div class="i0UOo"><button type="button" class="jb2yQ"><span>Sales channels</span><span class="uKxlv"><span
                              class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M8 16a.999.999 0 0 1-.707-1.707l4.293-4.293-4.293-4.293a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5a.997.997 0 0 1-.707.293z">
                                </path>
                              </svg></span></span></button></div>
                      <ul class="hFArt">
                        <li class="DF2ig" role="button" tabIndex="-1" aria-disabled="true" aria-roledescription="sortable"
                          aria-describedby="DndDescribedBy-0">
                          <ul class="PwNOf">
                            <li class="Polaris-Navigation__ListItem_wxd2m Polaris-Navigation__ListItem--hasAction_11n18">
                              <div class="Polaris-Navigation__ItemWrapper_1kbav">
                                <div
                                  class="Polaris-Navigation__ItemInnerWrapper_1umqf Polaris-Navigation--itemInnerWrapperDisplayActionsOnHover_1oogy">
                                  <a data-polaris-unstyled="true" class="Polaris-Navigation__Item_yiyol" tabIndex="0"
                                    aria-disabled="false" aria-expanded="false" aria-controls="PolarisSecondaryNavigation25"
                                    href="/admin/themes?appLoadId=48929a4e-311a-48ba-94c7-f416d8704a97">
                                    <div class="Polaris-Navigation__Icon_yj27d Polaris-Navigation__Icon--resized_1snul"><span
                                        class="Polaris-Icon_yj27d"><span
                                          class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><img
                                          class="Polaris-Icon__Img_375hq"
                                          src="data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 20 20&quot;><path d=&quot;M2.971 1.545A1 1 0 013.861 1h12.277a1 1 0 01.89.545l1.669 3.128c.03.062.063.138.094.224.09.228.153.47.185.722.015.098.024.189.024.263V6a2.992 2.992 0 01-1.092 2.315A2.988 2.988 0 0116 9c-.617 0-1.19-.186-1.666-.505A2.997 2.997 0 0113 6v.02A2.997 2.997 0 0110 9a2.986 2.986 0 01-1.677-.512A2.997 2.997 0 017 6.019 2.997 2.997 0 014 9c-.768 0-1.47-.289-2-.764C1.386 7.686 1 6.888 1 6v-.118c0-.063.007-.137.019-.218.049-.443.194-.856.415-1.219l1.537-2.9zM18 17.5v-6.916A4.983 4.983 0 0116 11a4.978 4.978 0 01-3-1c-.836.628-1.874 1-3 1a4.978 4.978 0 01-3-1c-.836.628-1.874 1-3 1a4.983 4.983 0 01-2-.416V17.5A1.5 1.5 0 003.5 19h2A1.5 1.5 0 007 17.5v-3A1.5 1.5 0 018.5 13h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 001.5 1.5h2a1.5 1.5 0 001.5-1.5z&quot;/></svg>"
                                          alt="" aria-hidden="true"></span></div><span
                                      class="Polaris-Navigation__Text_yj3uv Polaris-Navigation__Text--truncated_1chyt">Online
                                      Store</span>
                                  </a><span class="Polaris-Navigation__SecondaryActions_n395k"><span class=""> <a
                                        href="https://payless.shopping/?_cd=47a477318e70ba11e52bb81f137aede6e50ac192567a74acbed17e572353b530&amp;_uid=74556997768&amp;preview_theme_id="
                                        target="_blank" rel="noopener noreferrer" data-polaris-unstyled="true"
                                        class="Polaris-Navigation__SecondaryAction_1dl4i" tabIndex="0" aria-disabled="false"
                                        aria-label="View your online store" aria-describedby="PolarisTooltipContent1"
                                        data-polaris-tooltip-activator="true"><span class="Polaris-Icon_yj27d"><span
                                            class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg
                                            viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false"
                                            aria-hidden="true">
                                            <path
                                              d="M17.928 9.628c-.091-.229-2.317-5.628-7.928-5.628s-7.838 5.399-7.93 5.628a1.017 1.017 0 0 0 0 .744c.093.229 2.319 5.628 7.93 5.628s7.837-5.399 7.928-5.628a1.017 1.017 0 0 0 0-.744zm-7.928 4.372a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 .002 4.001 2 2 0 0 0-.003-4.001z">
                                            </path>
                                          </svg></span></a> </span></span></div>
                              </div>
                              <div class="Polaris-Navigation__SecondaryNavigation_na5at">
                                <div id="PolarisSecondaryNavigation25"
                                  class="Polaris-Collapsible_1dqql Polaris-Collapsible--isFullyClosed_dljrt" aria-hidden="true"
                                  style="max-height: 0px; overflow: hidden;"></div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div id="DndDescribedBy-0" style="display: none;">
                        To pick up a draggable item, press the space bar.
                        While dragging, use the arrow keys to move the item.
                        Press space again to drop the item in its new position, or press escape to cancel.
                      </div>
                      <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true"
                        style="position: fixed; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;">
                      </div>
                      </li>
                      <li class="IypnU">
                      <div class="i0UOo"><button type="button" class="jb2yQ"><span>Apps</span><span class="uKxlv"><span
                              class="Polaris-Icon_yj27d"><span
                                class="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                  d="M8 16a.999.999 0 0 1-.707-1.707l4.293-4.293-4.293-4.293a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5a.997.997 0 0 1-.707.293z">
                                </path>
                              </svg></span></span></button></div>
                      <ul class="hFArt aFQzf"></ul>
                      <div id="DndDescribedBy-1" style="display: none;">
                        To pick up a draggable item, press the space bar.
                        While dragging, use the arrow keys to move the item.
                        Press space again to drop the item in its new position, or press escape to cancel.
                      </div>
                      <div id="DndLiveRegion-1" role="status" aria-live="assertive" aria-atomic="true"
                        style="position: fixed; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;">
                      </div>
                      </li>`
          }}
        />

        <div className="tCaSv">
          <ul className="Polaris-Navigation__Section_1b1h1">
            <li className="Polaris-Navigation__ListItem_wxd2m">
              <div className="Polaris-Navigation__ItemWrapper_1kbav">
                <div className="Polaris-Navigation__ItemInnerWrapper_1umqf">
                  <SettingsModal />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
