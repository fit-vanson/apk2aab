<!DOCTYPE html>
<head>
    <meta charset='utf-8'/>
    <title>Apk2aab.net - Convert apk to aab miễn phí!</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name='description'
          content='apk2aab.net - Dịch vụ convert file và chia sẻ file miễn phí 100%.'/>
    <meta name='description'
          content='apk2aab.net - Dịch vụ convert file và chia sẻ file miễn phí 100%'/>
    <link rel="icon" type="image/x-icon" href="{{asset('image/favicon.ico')}}"/>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <meta name='keywords' content='apk2aab,apk2aab.net'/>
    <meta name='robots' content='index, follow'/>
    <meta property='og:title' content='apk2aab.net - Convert file lên mạng và chia sẻ file miễn phí'/>
    <meta property='og:site_name' content='apk2aab.net'/>
    <meta property='og:type' content='article'/>
    <meta property='og:url' content='apk2aab.net'/>
    <meta property='og:image' content='{{asset('image/img.png')}}'/>
    <meta property='og:description'
          content='apk2aab.net - Dịch vụ convert file và chia sẻ file miễn phí 100%.'/>

    <meta name='twitter:url' content='apk2aab.net'/>
    <meta name='twitter:title' content='apk2aab.net'/>
    <meta name='twitter:description'
          content='apk2aab.net - Dịch vụ convert file và chia sẻ file miễn phí 100%.'/>
    <meta name='twitter:image' content='{{asset('image/img.png')}}'/>
    <meta name='twitter:card' content='summary'/>
    <meta name='distribution' content='Global'/>
    <meta name='rating' content='General'/>
    <meta name='revisit-after' content='weekly'/>
    <meta name='classification' content='upfile, upload, free upload, share file'/>
    <script src='{{asset('js/jquery.js')}}'></script>
    <script src='{{asset('js/cufon-yui.js')}}'></script>
    <script src='{{asset('js/UTM_Alter_Gothic_400.font.js')}}'></script>
    <script>var languageText = new Array();
        languageText = {
            'L_HOME': 'Trang chủ',
            'L_INTRO': 'Giới thiệu',
            'L_REGISTER': 'Đăng ký',
            'L_LOGIN': 'Đăng nhập',
            'L_LOGOUT': 'Đăng xuất',
            'L_CONTACT': 'Liên hệ',
            'L_NOTIFY': 'Thông báo',
            'L_CLOSE': 'Đóng',
            'L_WAIT': 'Vui lòng chờ',
            'L_PROCESSING': 'Đang xử lý dữ liệu, vui lòng chờ...',
            'L_INVALIDEMAIL': 'Vui lòng nhập <span style=\"font-weight:bold;text-decoration:underline\">địa chỉ email thật</span> để nhận thư kích hoạt tài khoản từ hệ thống.',
            'L_INVALIDPASSWORD': 'Để bảo mật, vui lòng nhập mật mã <span style=\"font-weight:bold;text-decoration:underline\">có ít nhất 6 ký tự</span> (Mật mã của bạn sẽ được hệ thống <span style=\"font-weight:bold;text-decoration:underline\">Mã hóa 256 bits</span> và không thể giải mã)',
            'L_INVALIDPASSWORD2': 'Vui lòng <span style=\"font-weight:bold;text-decoration:underline\">nhập lại mật mã</span> giống với mật mã đã nhập phía trên để chắc chắn rằng bạn không nhập nhầm.',
            'L_INVALIDPHONE': 'Vui lòng nhập số điện thoại có từ 10-15 số hoặc để trống.',
            'L_INVALIDNAME': 'Vui lòng nhập tên chủ khoản có ít nhất 5 ký tự và ít nhất 1 ký tự khoảng trắng',
            'L_INVALIDFILE': 'Vui lòng nhập chọn file định dạng APK.',

        };</script>
    <link href='{{asset('css/main.css')}}' type='text/css' rel='stylesheet'/>
    <script>isLogged = false;</script>
    <script src='{{asset('js/main.js')}}'></script>

</head>
<body>
<div id='Header'><a href='{{route('home.index')}}' class='Logo'></a>
    <ul>
        <li><a href='{{route('home.index')}}' title='Trang chủ' class='Hover'>Trang chủ</a></li>
        <li><a href='{{route('home.info')}}' title='Giới thiệu'>Giới thiệu</a></li>
        <li><a href='{{route('home.contact')}}' title='Giới thiệu'>Liên hệ</a></li>
    </ul>
</div>

<div class="content-body">
    @yield('content')
</div>
</body>
