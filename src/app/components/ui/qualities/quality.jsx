import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQuality";
const Quality = (qual) => {
    const { isLoading, getQualities } = useQualities();
    const quality = getQualities(qual.id);

    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + quality.color} key={quality._id}>
                {quality.name}
            </span>
        );
    } else {
        return "Loading...";
    }
};
Quality.propTypes = {
    qual: PropTypes.array
};

export default Quality;
