function createGenericButtons() {
    return `<div class="row my-5">
        <div class="col-4 text-center">
            <div class="rem-btn" style="color:green">
                <i class="fa fa-power-off remicon" aria-hidden="true"></i>
            </div>
        </div>
        <div class="col-4 text-center">
            <div class="rem-btn">
                <i class="fa fa-envelope-open remicon" aria-hidden="true"></i>
            </div>
        </div>
        <div class="col-4 text-center">
            <div class="rem-btn" style="color:red">
                <i class="fa fa-power-off remicon" aria-hidden="true"></i>
            </div>
        </div>
    </div>`;
};

function createCameraRemote() {
    return `<div class="row my-20">
        <div class="rem-btn cam">
            <i class="fa fa-camera fa-3x remicon" aria-hidden="true"></i>
        </div>
    </div>`;
};

function createFanRemote() {
    return `<div class="row my-5">
    <div class="col-12 text-center">
        <div class="ctrlkeys ctrlTop"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
        <div class="ctrlkeys">FAN</div>
        <div class="ctrlkeys ctrlBottom"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
    </div>
</div>`;
}

function createACRemote() {
    return `<div class="row my-5">
        <div class="col-12 text-center">
            <div class="ctrlkeys ctrlTop"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
            <div class="ctrlkeys">TEMP</div>
            <div class="ctrlkeys ctrlBottom"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
        </div>
    </div>`;
};

function createTVRemote() {
    return `<div class="row my-5">
        <div class="rem-btn outer-circle">
            <div class="rem-btn inner-circle text-center">
                OK        
            </div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-4 text-center">
            <div class="ctrlkeys ctrlTop"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
            <div class="ctrlkeys">CH</div>
            <div class="ctrlkeys ctrlBottom"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
        </div>
        <div class="col-4 text-center"></div>
        <div class="col-4 text-center">
            <div class="ctrlkeys ctrlTop"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
            <div class="ctrlkeys">VOL</div>
            <div class="ctrlkeys ctrlBottom"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-4 text-center"><div class="rem-btn"><i class="fa fa-fast-backward remicon" aria-hidden="true"></i></div></div>
        <div class="col-4 text-center row">
            <div class="col-4"><i class="rem-btn pt-16 fa fa-backward remicon" aria-hidden="true"></i></div>
            <div class="col-4"><i class="rem-btn pt-16 fa fa-play remicon" aria-hidden="true"></i></div>            
            <div class="col-4"><i class="rem-btn pt-16 fa fa-forward remicon" aria-hidden="true"></i></div>
        </div>
        <div class="col-4 text-center"><div class="rem-btn ml-50pc"><i class="fa fa-fast-forward remicon" aria-hidden="true"></i></div></div>
    </div>
    <div class="row my-5">
        <div class="col-4 text-center">
            <div class="rem-btn" style="color:green">
                <i class="fa fa-volume-up remicon" aria-hidden="true"></i>
            </div>
        </div>
        <div class="col-4 text-center"></div>
        <div class="col-4 text-center">
            <div class="rem-btn" style="color:red">
                <i class="fa fa-volume-off remicon" aria-hidden="true"></i>
            </div>
        </div>
    </div>`;
}

export {createGenericButtons, createCameraRemote, createFanRemote, createACRemote, createTVRemote};