import { Button, Columns, FormLayout, Inline, Label, Modal, RadioButton, Text, TextField } from '@shopify/polaris';
import { useState, useCallback, MouseEventHandler, useEffect, useRef } from 'react';
import { useLazyGetSettingsQuery, useUpdateSettingsMutation } from 'src/app/services/firebaseApi';

const OpenButton = (props: { onClick: MouseEventHandler<HTMLAnchorElement>; }) => {
    return (
        <a onClick={props.onClick} className="Polaris-Navigation__Item_yiyol" tabIndex={0}>
            <div className="Polaris-Navigation__Icon_yj27d">
                <span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span>
                    <svg
                        viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                        <path
                            d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm7.476-1.246c-1.394-.754-1.394-2.754 0-3.508a1 1 0 0 0 .376-1.404l-1.067-1.733a1 1 0 0 0-1.327-.355l-.447.243c-1.329.719-2.945-.244-2.945-1.755v-.242a1 1 0 0 0-1-1h-2.132a1 1 0 0 0-1 1v.242c0 1.511-1.616 2.474-2.945 1.755l-.447-.243a1 1 0 0 0-1.327.355l-1.067 1.733a1 1 0 0 0 .376 1.404c1.394.754 1.394 2.754 0 3.508a1 1 0 0 0-.376 1.404l1.067 1.733a1 1 0 0 0 1.327.355l.447-.243c1.329-.719 2.945.244 2.945 1.755v.242a1 1 0 0 0 1 1h2.132a1 1 0 0 0 1-1v-.242c0-1.511 1.616-2.474 2.945-1.755l.447.243a1 1 0 0 0 1.327-.355l1.067-1.733a1 1 0 0 0-.376-1.404z">
                        </path>
                    </svg>
                </span>
            </div>
            <span className="Polaris-Navigation__Text_yj3uv">Settings</span>
        </a>
    );
}

export default function SettingsModal() {
    const [getData, { data }] = useLazyGetSettingsQuery();
    const [updateSettings] = useUpdateSettingsMutation();
    const [active, setActive] = useState(false);
    const [radioValue, setRaioValue] = useState<number>(null);
    const [countValue, setCountValue] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        if (active) {
            getData();
        }
    }, [active]);

    useEffect(() => {
        if (data) {
            setRaioValue(data.currentUserId);

            const count: { [key: number]: number } = {};
            data.usersSettings.forEach(item => {
                count[item.id] = item.ordersCount;
            });
            setCountValue(count);
        }
    }, [data]);

    const toggleActive = (e?: any) => {
        e?.preventDefault();
        setActive((active) => !active);
    };

    const saveSettings = () => {
        const usersSettings: {
            id: number;
            ordersCount: number;
        }[] = [];

        for (const key in countValue) {
            if (Object.prototype.hasOwnProperty.call(countValue, key)) {
                usersSettings.push({
                    id: Number(key),
                    ordersCount: countValue[key],
                });
            }
        }

        updateSettings({
            currentUserId: radioValue,
            usersSettings: usersSettings,
        });

        toggleActive();
    };


    return (
        <Modal
            large
            activator={<OpenButton onClick={toggleActive} />}
            open={active}
            onClose={toggleActive}
            title="Settings"
            primaryAction={{
                content: 'Save settings',
                onAction: saveSettings,
            }}
            secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: toggleActive,
                },
            ]}
        >
            <Modal.Section>
                <Columns columns={2} gap="6">
                    <FormLayout>
                        <Text variant="headingMd" as="p">
                            Current User
                        </Text>
                        {data && data.usersSettings.map((item) => {
                            return (<RadioButton
                                key={item.id}
                                label={item.id + " user"}
                                name="currentUserId"
                                checked={radioValue === Number(item.id)}
                                value={String(item.id)}
                                onChange={() => setRaioValue(Number(item.id))}
                            />);
                        })}
                    </FormLayout>
                    <FormLayout>
                        <Text variant="headingMd" as="p">
                            Order Count
                        </Text>
                        <div className='formGrid'>
                            {data && data.usersSettings.map((item) => (
                                <div className="formGrid__item" key={item.id}>
                                    <TextField
                                        value={String(countValue[item.id])}
                                        label={item.id + " user"}
                                        type="number"
                                        name="ordersCount[]"
                                        autoComplete='off'
                                        onChange={(val) => setCountValue((state) => ({ ...state, [item.id]: Number(val) }))}
                                    />
                                </div>
                            ))}
                        </div>
                    </FormLayout>
                </Columns>
            </Modal.Section>
        </Modal>
    );
}