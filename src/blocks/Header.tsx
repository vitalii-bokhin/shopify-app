const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyMiAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuMjcgNC44MTNhLjI0Mi4yNDIgMCAwIDAtLjIxOC0uMjA0IDE4MS4wOCAxODEuMDggMCAwIDAtMS44NjYtLjAzNHMtMS40ODMtMS40NDYtMS42My0xLjU5M2MtLjE0Ni0uMTQ3LS40MzEtLjEwMi0uNTQ0LS4wNy0uMDAyIDAtLjI4LjA4Ni0uNzQ1LjIzMmE1LjE2MiA1LjE2MiAwIDAgMC0uMzU4LS44OEMxMy4zOCAxLjI1NCAxMi42MDYuNzIgMTEuNjcyLjcxOGgtLjAwNGMtLjA2NCAwLS4xMjkuMDA2LS4xOTUuMDEyLS4wMjgtLjAzMy0uMDU0LS4wNjctLjA4NC0uMDk3LS40MDgtLjQzNy0uOTMtLjY1LTEuNTU2LS42My0xLjIwOC4wMzEtMi40MS45MDctMy4zODMgMi40Ni0uNjg3IDEuMDkzLTEuMjA4IDIuNDY4LTEuMzU3IDMuNTNsLTIuMzc3LjczOGMtLjcuMjItLjcyMS4yNDEtLjgxNC45MDNDMS44MzEgOC4xMzUgMCAyMi4zMzcgMCAyMi4zMzdMMTUuMzQ4IDI1IDIyIDIzLjM0MWMuMDAyLjAwMi0yLjcxMy0xOC40MDEtMi43My0xOC41MjhabS01Ljc3My0xLjQzYy0uMzU0LjExLS43NTYuMjM0LTEuMTkyLjM3MS0uMDA4LS42MTItLjA4Mi0xLjQ2Ny0uMzY4LTIuMjAzLjkxOS4xNzEgMS4zNjkgMS4yMTIgMS41NiAxLjgzMlptLTEuOTk0LjYyLTIuNTYyLjc5NWMuMjQ3LS45NS43MTctMS44OTggMS4yOTQtMi41MTcuMjE1LS4yMy41MTUtLjQ4OC44Ny0uNjM1LjMzNC42OTcuNDA2IDEuNjg3LjM5OCAyLjM1NlpNOS44Ni44MDRjLjI4NC0uMDA2LjUyMy4wNTcuNzI2LjE5Mi0uMzI2LjE3LS42NDEuNDEzLS45MzkuNzMyLS43NjcuODI0LTEuMzU0IDIuMTA2LTEuNTkgMy4zNDJsLTIuMTAzLjY1M0M2LjM2OSAzLjc4IDcuOTk0Ljg2IDkuODU5LjgwNVoiIGZpbGw9IiNGRkE4MDEiLz48cGF0aCBkPSJtMTEuNjY0IDguMDQtLjc3MiAyLjg5OHMtLjg2Mi0uMzkzLTEuODgzLS4zMjljLTEuNDk3LjA5NS0xLjUxMyAxLjA0My0xLjQ5OSAxLjI4LjA4MyAxLjI5NyAzLjQ4MyAxLjU4IDMuNjc0IDQuNjE3LjE1IDIuMzg4LTEuMjY0IDQuMDIzLTMuMyA0LjE1Mi0yLjQ0NC4xNTUtMy43OS0xLjI5Mi0zLjc5LTEuMjkybC41MTgtMi4yMTJzMS4zNTUgMS4wMjYgMi40NC45NTZjLjcwNy0uMDQ0Ljk2LS42MjMuOTM2LTEuMDMyLS4xMDYtMS42OTEtMi44NzUtMS41OTItMy4wNS00LjM3QzQuNzkgMTAuMzcgNi4zMjIgNy45OTkgOS43IDcuNzg1YzEuMjk2LS4wNzggMS45NjMuMjU0IDEuOTYzLjI1NFoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTkuMDUxIDQuNjFjLS4wOS0uMDA5LTEuODY1LS4wMzUtMS44NjUtLjAzNXMtMS40ODMtMS40NDUtMS42My0xLjU5M2EuMzY1LjM2NSAwIDAgMC0uMjA2LS4wOTRWMjVMMjIgMjMuMzQxIDE5LjI2OCA0LjgxM2EuMjQyLjI0MiAwIDAgMC0uMjE3LS4yMDRaIiBmaWxsPSIjQzI4MTAyIi8+PC9zdmc+';

const logo2 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCA2NyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45MDMgMTAuNDM0Yy0uOC0uNDI2LTEuMjEtLjc4NS0xLjIxLTEuMjc4IDAtLjYyOC41Ny0xLjAzMSAxLjQ2MS0xLjAzMSAxLjAzOCAwIDEuOTY0LjQyNiAxLjk2NC40MjZsLjczMS0yLjE5N3MtLjY3Mi0uNTE2LTIuNjUtLjUxNmMtMi43NTIgMC00LjY1OSAxLjU0Ny00LjY1OSAzLjcyMSAwIDEuMjMzLjg5IDIuMTc1IDIuMDc5IDIuODQ3Ljk2LjUzNyAxLjMwMi45MTkgMS4zMDIgMS40NzkgMCAuNTgzLS40OCAxLjA1My0xLjM3IDEuMDUzLTEuMzI4IDAtMi41ODEtLjY3Mi0yLjU4MS0uNjcybC0uNzc3IDIuMTk3czEuMTU4Ljc2MiAzLjEwNy43NjJjMi44MzIgMCA0Ljg2NS0xLjM2OCA0Ljg2NS0zLjgzMyAwLTEuMzIyLTEuMDI4LTIuMjY0LTIuMjYyLTIuOTU4Wm0xMS4yODQtNC42MThjLTEuMzkzIDAtMi40OS42NS0zLjMzNCAxLjYzNmwtLjA0Ni0uMDIyIDEuMjEtNi4yMWgtMy4xNTJsLTMuMDYgMTUuODAzaDMuMTUybDEuMDUtNS40MDFjLjQxMS0yLjA0IDEuNDg1LTMuMjk1IDIuNDktMy4yOTUuNzA4IDAgLjk4Mi40Ny45ODIgMS4xNDMgMCAuNDI2LS4wNDYuOTQyLS4xMzcgMS4zNjhsLTEuMTg3IDYuMTg2aDMuMTUybDEuMjM0LTYuMzg4Yy4xMzYtLjY3My4yMjgtMS40OC4yMjgtMi4wMTgtLjAwMS0xLjc0OS0uOTM4LTIuODAyLTIuNTgyLTIuODAyWm05LjcwNiAwYy0zLjc5MSAwLTYuMzAzIDMuMzYzLTYuMzAzIDcuMTA2IDAgMi4zOTggMS41MDcgNC4zMjYgNC4zNCA0LjMyNiAzLjcyMyAwIDYuMjM1LTMuMjczIDYuMjM1LTcuMTA2IDAtMi4yMTktMS4zMjUtNC4zMjYtNC4yNzEtNC4zMjZabS0xLjU1MyA5LjA1N2MtMS4wNzMgMC0xLjUzLS44OTctMS41My0yLjAxOCAwLTEuNzcuOTM3LTQuNjYyIDIuNjUtNC42NjIgMS4xMTkgMCAxLjQ4NC45NDEgMS40ODQgMS44NiAwIDEuOTA1LS45MzYgNC44Mi0yLjYwNCA0LjgyWm0xMy44ODYtOS4wNTdjLTIuMTI3IDAtMy4zMzUgMS44MzktMy4zMzUgMS44MzloLS4wNDVsLjE4My0xLjY2aC0yLjc4N2E2NC44MjEgNjQuODIxIDAgMCAxLS42NCA0LjEwM2wtMi4xOTIgMTEuMzJoMy4xNTJsLjg2OC00LjU3NGguMDY5cy42NDcuNDA0IDEuODUuNDA0YzMuNyAwIDYuMTItMy43MjEgNi4xMi03LjQ4NyAwLTIuMDg0LS45MzYtMy45NDUtMy4yNDMtMy45NDVabS0zLjAxNSA5LjFjLS44MTggMC0xLjMwMi0uNDQ3LTEuMzAyLS40NDdsLjUyNi0yLjg5MmMuMzY1LTEuOTI3IDEuMzkzLTMuMjA1IDIuNDktMy4yMDUuOTU5IDAgMS4yNTYuODc0IDEuMjU2IDEuNzAzIDAgMS45OTUtMS4yMSA0Ljg0Mi0yLjk3IDQuODQyWk00Ni45NyAxLjM3OGExLjc4MiAxLjc4MiAwIDAgMC0xLjgwNCAxLjc5M2MwIC45Mi41OTQgMS41NDcgMS40ODQgMS41NDdoLjA0NmMuOTgzIDAgMS44MjctLjY1IDEuODUtMS43OTMgMC0uODk3LS42MTYtMS41NDctMS41NzYtMS41NDdabS00LjQwNyAxNS42NDZoMy4xNTFsMi4xNDgtMTAuOTZoLTMuMTc2bC0yLjEyMyAxMC45NlpNNTUuODc4IDYuMDRoLTIuMTkzbC4xMTQtLjUxNWMuMTgzLTEuMDU0LjgyMy0xLjk5NSAxLjg3My0xLjk5NWEzLjM0IDMuMzQgMCAwIDEgMS4wMDUuMTU3bC42MTctMi40MjFTNTYuNzQ2Ljk5NyA1NS41OC45OTdjLTEuMTIgMC0yLjIzOC4zMTQtMy4wODQgMS4wMzEtMS4wNzMuODk3LTEuNTc2IDIuMTk2LTEuODI3IDMuNDk3bC0uMDkxLjUxNmgtMS40NjJsLS40NTcgMi4zMzFoMS40NjJsLTEuNjY3IDguNjUyaDMuMTUybDEuNjY4LTguNjUyaDIuMTdsLjQzMy0yLjMzMVptNy41ODMuMDIzcy0xLjk3IDQuODcyLTIuODU1IDcuNTMxaC0uMDQ2Yy0uMDYtLjg1Ni0uNzc3LTcuNTMtLjc3Ny03LjUzaC0zLjMxMmwxLjg5NyAxMC4wNjNjLjA0Ni4yMjQuMDIzLjM1OS0uMDcuNTE2LS4zNjUuNjk0LS45ODEgMS4zNjctMS43MTIgMS44Ni0uNTk0LjQyNi0xLjI1Ni42OTUtMS43ODEuODc1TDU1LjY3MiAyMmMuNjQtLjEzNCAxLjk2NC0uNjUgMy4wODQtMS42OCAxLjQzOS0xLjMyMyAyLjc2My0zLjM2MyA0LjEzNC02LjE0M2wzLjg2LTguMTE0aC0zLjI5WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==';

export default function Header(props: { appLoading: any; userName: string; avatar: string; }) {
    return props.appLoading ? (
        <div className='Polaris-TopBar_z6tf9'>
            <div className="Polaris-TopBar__ContextControl_3di0f"><div className="pIYWy">
                <div>
                    <img alt="Shopify Editions" src={logo} className="CHSY2" />
                    <img alt="Shopify Editions" src={logo2} className="m9n8p" />
                </div>
            </div></div><div className="Polaris-TopBar__Contents_1u1wn"><div className="Polaris-TopBar__SearchField_ek145"><div className="wxQ_9"></div></div><div className="Polaris-TopBar__SecondaryMenu_7y4ay"></div><div className="fTqdT"><div className="WO7Ww"></div><div className="SNQXW"></div></div></div>
        </div>
    ) : (
        <div>
            <div className="Polaris-TopBar_z6tf9"><button type="button" className="Polaris-TopBar__NavigationIcon_1bdcy"
                aria-label="Toggle menu">
                <div className="Polaris-TopBar__IconWrapper_1kb6z"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                        className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                        <path
                            d="M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z">
                        </path>
                    </svg></span></div>
            </button>
                <div className="Polaris-TopBar__ContextControl_3di0f">
                    <div className="xtW1C">
                        <div className="Y90id">
                            <img alt="Shopify Editions" src={logo} className="HpTKZ xa0qG" />
                            <img alt="Shopify Editions" src={logo2} className="BCsv_" />
                        </div>
                        {/* <div className="Di55P lnOmq xa0qG"><a
                            href="https://www.shopify.com/editions/winter2023?utm_content=merchant&amp;utm_medium=badge&amp;utm_source=admin&amp;utm_campaign=editions_winter23"
                            target="_blank" rel="noopener noreferrer" data-polaris-unstyled="true"><span className="bBmk8">Winter
                                ‘23</span></a></div> */}
                    </div>
                </div>
                <div className="Polaris-TopBar__Contents_1u1wn">
                    <div className="Polaris-TopBar__SearchField_ek145">
                        <div><button type="button" className="Kq5q1"><span className="cTtDT"><span className="Polaris-Icon_yj27d"><span
                            className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path
                                    d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9.707 4.293-4.82-4.82a5.968 5.968 0 0 0 1.113-3.473 6 6 0 0 0-12 0 6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z">
                                </path>
                            </svg></span></span><span className="zDkMR" title="Search">Search</span></button></div>
                    </div>
                    <div className="Polaris-TopBar__SecondaryMenu_7y4ay">
                        <div className="WQAz1">
                            <div>
                                <div className="_o7tR"><button type="button" className="igRJK" aria-label="Alerts Feed - 0 unread alerts"
                                    tabIndex={0} aria-controls="Polarispopover1" aria-owns="Polarispopover1" aria-expanded="false"><span
                                        className="Polaris-Icon_yj27d Polaris-Icon--colorBase_nqlaq Polaris-Icon--applyColor_2y25n"><span
                                            className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20"
                                                className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                            <path
                                                d="M10 0a1 1 0 0 1 1 1v2.032l-.001.021-.002.03a6.002 6.002 0 0 1 5.003 5.917c0 3.093.625 4.312 1.599 6.21l.034.068c.17.33-.07.722-.442.722h-14.382a.496.496 0 0 1-.442-.722l.034-.068c.974-1.898 1.599-3.117 1.599-6.21a6.002 6.002 0 0 1 5.003-5.918l-.002-.04a.835.835 0 0 1-.001-.042v-2a1 1 0 0 1 1-1zm2 18a2 2 0 0 1-4 0h4z">
                                            </path>
                                        </svg></span></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="UserMenuContainer">
                        <div>
                            <div className="Polaris-TopBar-Menu__ActivatorWrapper_1gxxh">
                                <button type="button"
                                    className="Polaris-TopBar-Menu__Activator_e3w0d" tabIndex={0} aria-controls="Polarispopover2"
                                    aria-owns="Polarispopover2" aria-expanded="false">
                                    <div className="Polaris-MessageIndicator__MessageIndicatorWrapper_152yb"><span
                                        aria-label="Avatar with initials T Y" role="img"
                                        className="Polaris-Avatar_z763p Polaris-Avatar--sizeSmall_7647q Polaris-Avatar--imageHasLoaded_1bsq5 Polaris-Avatar--shapeRound_2651c">
                                        <img src={props.avatar} alt={props.userName}
                                            className="Polaris-Avatar__Image_2qgms" role="presentation" />
                                    </span></div><span
                                        className="Polaris-TopBar-UserMenu__Details_1bdkj">
                                        <p
                                            className="Polaris-Text--root_yj4ah Polaris-Text--medium_oli4o Polaris-Text--block_32woz Polaris-Text--start_30ir5 Polaris-Text--truncate_4qxon">{props.userName}</p>
                                        <p
                                            className="Polaris-Text--root_yj4ah Polaris-Text--bodySm_nvqxj Polaris-Text--block_32woz Polaris-Text--start_30ir5 Polaris-Text--subdued_17vaa Polaris-Text--truncate_4qxon">
                                        </p>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
