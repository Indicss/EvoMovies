import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { useSearchParams } from "react-router-dom";

export const useDebouncedSearch = (key: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialValue = searchParams.get(key) || "";
    const [displayValue, setDisplayValue] = useState(initialValue);

    const debouncedUpdate = useMemo(
        () =>
            debounce((value: string) => {
                setSearchParams(
                    (prev) => {
                        if (value) prev.set(key, value);
                        else prev.delete(key);
                        return prev;
                    },
                    { replace: true },
                );
            }, 500),
        [key, setSearchParams],
    );

    const handleChange = (newValue: string) => {
        setDisplayValue(newValue);
        debouncedUpdate(newValue);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisplayValue(searchParams.get(key) || "");
    }, [searchParams, key]);

    return [displayValue, handleChange] as const;
};
