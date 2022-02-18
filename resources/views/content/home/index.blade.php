@extends('layouts/main')
@section('content')
<div id='Body'>
    <div class='Intro'>
        <div class='leftSide'><h1>Chào mừng bạn đến với apk2aab!</h1>
            <p><b>Với thành viên của UpFile.vn, giờ đây bạn có thể:</b></p>
            <p> - Convert file apk lên đến 4 GB/file</br>
                - Thời gian lưu trữ file tính từ lần download cuối là 60 ngày</br>
                - Không phải chờ đợi khi download file</br>
                - Tốc độ download file lên đến 3 MB/s.</br>
                <span style='color:red'><b>Tất cả FREE!</b></span>
            </p></div>
        <div class='rightSide'>
            <form method='post' id='frmRegister'>
                <h1>Convert APK to AAB</h1>
                <div class='Field'>
                    <div class='leftColumn'>Email <span style='color:red'> (*)</span></div>
                    <div class='rightColumn'><input type='text' name='Email' data-check='Email'
                                                    placeholder='Địa chỉ email để nhận link download' autocomplete='off'/>
                    </div>
                </div>
                <div class='Field'>
                    <div class='leftColumn'>Họ và tên  <span style='color:red'> (*)</span></div>
                    <div class='rightColumn'><input type='text' name='Name' data-check='Name'
                                                    placeholder='Tên tài khoản' autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <div class='leftColumn'>Số di động</div>
                    <div class='rightColumn'><input type='text' name='Phone' data-check='Phone'
                                                    placeholder='Số điện thoại liên lạc' autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <div class='leftColumn'>File  <span style='color:red'> (*)</span></div>
                    <div class='rightColumn'><input type='file' name='File' id="fileapk" data-check='File' accept=".apk"
                                                   autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <br/>
                    <div class='leftColumn'>&nbsp;</div>
                    <div class='rightColumn'><div class="g-recaptcha" data-sitekey="{{config('services.recaptcha.key')}}"></div>
                    </div>
                </div>
                <div class='Field'>
                    <a href='#Convert' class='Register'>Convert</a>
                    <input type='submit'/></div>
            </form>
        </div>
    </div>


    <div class='userMessage'><h1>Convert thành công</h1>
        <p>Cảm ơn bạn đã sử dụng dịch vụ, file convert sẽ được gủi đến mail của bạn. Vui lòng truy cập vào mail để lấy link download!</p></div>
</div>
@endsection
