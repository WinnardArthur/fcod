import React from 'react';
import './divider.css'

const Divider = ({ right }) => {

    const LeftPageDivider = () => {
        return (
            <>
                <div class="pageDivider leftPageDivider">
                    <div class="leftAnchor"></div>
                    <div class="middleAnchor"></div>
                </div>
            </>
        )
    }

    const RightPageDivider = () => {
        return (
            <>
                <div class="pageDivider rightPageDivider">
                    <div class="middleAnchor"></div>
                    <div class="rightAnchor"></div>
                </div>
            </>
        )
    }


    return (
        <div class="pageDividerGroup">
            <div>
                {right ?  <RightPageDivider /> : <LeftPageDivider/>}
            </div>
        </div>
    )
}

export default Divider
