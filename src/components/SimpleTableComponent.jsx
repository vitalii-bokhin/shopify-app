export default function SimpleTableComponent(props) {
    const renderTitle = props.renderTitle || ((item) => item);

    return (
        <table className="bsaOo">
            {props.items.map((item) => {
                const value = item.count ?? item.value;

                return (
                    <tbody key={item.id}>
                        <tr className="smW4Q">
                            <td className="R6ls0" colSpan="2">{renderTitle(item.title)}</td>
                            <td className="R6ls0 Ay5iz QcJza" colSpan="2">{value}</td>
                            {/* <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                <div className="wqc8b"></div>
                            </td> */}
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