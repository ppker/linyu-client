import "./index.less";
import {memo, useEffect, useState} from "react";
import UserAPi from "../../api/user.js";
import CreateImageViewer from "../../pages/ImageViewer/window.jsx";

const CustomImg = memo(({fileName, targetId}) => {
    const [imgInfo, setImgInfo] = useState(null);

    useEffect(() => {
        UserAPi.getImg({fileName, targetId})
            .then((res) => {
                setImgInfo(res.data);
            });
    }, [fileName, targetId]);

    return (
        <div className="custom-img" onClick={(e) => e.stopPropagation()}>
            {imgInfo ? (
                <img
                    className="img"
                    src={imgInfo}
                    alt=""
                    onClick={(e) => {
                        CreateImageViewer(param.fileName, imgInfo)
                    }}
                />
            ) : (
                <div className="loading-spinner"></div>
            )}
        </div>
    )
});

export default CustomImg;
