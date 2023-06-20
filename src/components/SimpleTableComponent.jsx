import ContentLoader from './ContentLoader';

export default function SimpleTableComponent(props) {
    const renderTitle = props.renderTitle || ((item) => item);

    return props.isLoading ? <ContentLoader /> : (
        <table className="bsaOo">
            {props.items.map((item) => {
                let value = item.count ?? item.value;
                value = (props.prefix ?? '') + value.toLocaleString('en-US');

                return (
                    <tbody key={item.id}>
                        <tr className="smW4Q">
                            <td className="R6ls0" colSpan="2">{renderTitle(item.title)}</td>
                            <td className="R6ls0 Ay5iz QcJza" colSpan="2">{value}</td>
                            {item.diff === 0 && (
                                <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                    <div className="wqc8b"><svg viewBox="0 0 29 16" height="16" width="29" role="img"
                                        className="_SVG_15ihc_1" tabIndex="0">
                                        <title>No change</title>
                                        <rect width="29" height="16" fill="#f6f6f7" rx="8"></rect>
                                        <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z"
                                            fill="#8c9196" transform="translate(8.5, 7)"></path>
                                    </svg></div>
                                </td>
                            )}
                            {!!item.diff && item.diff < 0 && (
                                <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                    <div className="badge badge_sm" style={{ color: '#eb4c5e' }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                        <span>
                                            {Math.abs(item.diff).toFixed(2)}%
                                        </span>
                                    </div>
                                </td>
                            )}
                            {!!item.diff && item.diff > 0 && (
                                <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                    <div className="badge badge_sm" style={{ color: '#119d7f' }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                        <span>
                                            {Math.abs(item.diff).toFixed(2)}%
                                        </span>
                                    </div>
                                </td>
                            )}
                        </tr>
                        <tr className="bqPpK I9ZSp">
                            <td className="R6ls0" colSpan="6">{renderTitle(item.title)}</td>
                        </tr>
                        <tr className="bqPpK">
                            <td className="R6ls0" colSpan="3">{value}</td>
                            <td className="R6ls0 Ay5iz" colSpan="3">
                                <div className="wqc8b"></div>
                            </td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
};