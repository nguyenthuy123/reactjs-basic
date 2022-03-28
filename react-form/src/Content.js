import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';

function Content() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-9 border">
                    <div className='category'>
                        <h2>DANH MỤC NGÔN NGỮ</h2>
                    </div>
                    <div className='search'>
                        <p>Mặc định: Tiếng Anh</p>
                        <fieldset className="scheduler-border">

                            <div className='scheduler'>
                                <legend className="scheduler-time">Start Time</legend>
                            </div>
                      
                            <div class="control-group">
                                <label class="control-label input-label" for="startTime">Start :</label>
                                <div class="controls bootstrap-timepicker">
                                    <input type="text" class="datetime" id="startTime" name="startTime" placeholder="Start Time" />
                                    <i class="icon-time"></i>
                                </div>
                            </div>
                        </fieldset>
                        
                    </div>
                </div>
                <div className='col col-3'>
                    1mkvkv
                </div>
            </div>

        </div>
    )
}

export default Content;