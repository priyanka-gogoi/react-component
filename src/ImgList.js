import React from 'react';

    const ImgList = (props) => {
        let imgs = props.data.map(img => {
            return <img key={img.id} src={img.urls.small} alt={img.alt_description} />
        });

        return (
            <div>{imgs}</div>
        )
    }

    export default ImgList;