<!DOCTYPE html>
<head>
    <meta charset='utf-8'/>
    <title>UpFile.vn - Upload file lên mạng và chia sẻ file miễn phí!</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name='description'
          content='UpFile.vn - Dịch vụ upload file và chia sẻ file miễn phí 100%, không giới hạn lưu trữ, tốc độ download lên đến 3 MB/s, không phải chờ đợi khi download.'/>
    <meta name='description'
          content='UpFile.vn - Dịch vụ upload file và chia sẻ file miễn phí 100%, không giới hạn lưu trữ, tốc độ download lên đến 3 MB/s, không phải chờ đợi khi download.'/>
    <link rel="icon" type="image/x-icon" href="http://upfile.vn/view/default/image/upfile_icon.ico"/>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <meta name='keywords' content='UpFile,UpFile.vn'/>
    <meta name='robots' content='index, follow'/>
    <meta property='og:title' content='UpFile.vn - Upload file lên mạng và chia sẻ file miễn phí'/>
    <meta property='og:site_name' content='UpFile.vn'/>
    <meta property='og:type' content='article'/>
    <meta property='og:url' content='http://upfile.vn/'/>
    <meta property='og:image' content='http://upfile.vn/view/default/filetype/thumbnail.png'/>
    <meta property='og:description'
          content='UpFile.vn - Dịch vụ upload file và chia sẻ file miễn phí 100%, không giới hạn lưu trữ, tốc độ download lên đến 3 MB/s, không phải chờ đợi khi download.'/>
    <meta property='fb:admins' content='1127168446'/>
    <meta name='twitter:url' content='http://upfile.vn/'/>
    <meta name='twitter:title' content='UpFile.vn'/>
    <meta name='twitter:description'
          content='UpFile.vn - Dịch vụ upload file và chia sẻ file miễn phí 100%, không giới hạn lưu trữ, tốc độ download lên đến 3 MB/s, không phải chờ đợi khi download.'/>
    <meta name='twitter:image' content='http://upfile.vn/view/default/filetype/thumbnail.png'/>
    <meta name='twitter:card' content='summary'/>
    <meta name='distribution' content='Global'/>
    <meta name='rating' content='General'/>
    <meta name='revisit-after' content='weekly'/>
    <meta name='classification' content='upfile, upload, free upload, share file'/>
{{--    <meta name='google-site-verification' content='WOKzUET3CMuVbe4I6CWg0jrOSxQ5lLab04SeLrCYKik'/>--}}
{{--    <meta name='norton-safeweb-site-verification'--}}
{{--          content='iiufi9dwer4aisqvp4l1mbtlb1cxc7d27dplu923qfma6xxi80zhfgl318smxo4qlbf8edssnzsjxbf2t8ddb0xn-0tx04a-twifmu0lv8k4fy4usn3nni9ksnv9x8av'/>--}}
{{--    <link rel='author' href='https://plus.google.com/+UpfileVnShareFileFree'/>--}}
{{--    <link rel='publisher' href='https://plus.google.com/+UpfileVnShareFileFree'/>--}}
    <script src='http://upfile.vn/view/default/js/jquery.js'></script>
    <script src='http://upfile.vn/view/default/js/cufon-yui.js'></script>
    <script src='http://upfile.vn/view/default/js/UTM_Alter_Gothic_400.font.js'></script>
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
            'L_SECOND': 'giây',
            'L_MINUTE': 'phút',
            'L_HOUR': 'giờ',
            'L_DAY': 'ngày',
            'L_CALCULATING_TIME': 'Đang xử lý...',
            'L_VERIFYING_FILE': 'Đang chờ máy chủ xử lý',
            'L_CONFIRM_LOGOUT': 'Bạn có thật sự muốn thoát khỏi hệ thống ?',
            'L_DONT_LOGOUT': 'Vui lòng không đăng xuất hệ thống khi chưa xử lý xong dữ liệu !',
            'L_LOGGED_OUT': 'Bạn đã đăng xuất khỏi hệ thống, website sẽ tự động được tải lại, vui lòng chờ...',
            'L_INVALIDEMAIL': 'Vui lòng nhập <span style=\"font-weight:bold;text-decoration:underline\">địa chỉ email thật</span> để nhận thư kích hoạt tài khoản từ hệ thống.',
            'L_INVALIDPASSWORD': 'Để bảo mật, vui lòng nhập mật mã <span style=\"font-weight:bold;text-decoration:underline\">có ít nhất 6 ký tự</span> (Mật mã của bạn sẽ được hệ thống <span style=\"font-weight:bold;text-decoration:underline\">Mã hóa 256 bits</span> và không thể giải mã)',
            'L_INVALIDPASSWORD2': 'Vui lòng <span style=\"font-weight:bold;text-decoration:underline\">nhập lại mật mã</span> giống với mật mã đã nhập phía trên để chắc chắn rằng bạn không nhập nhầm.',
            'L_INVALIDPHONE': 'Vui lòng nhập số điện thoại có từ 10-15 số hoặc để trống.',
            'L_INVALIDNAME': 'Vui lòng nhập tên chủ khoản có ít nhất 5 ký tự và ít nhất 1 ký tự khoảng trắng',
            'L_INVALIDAGREEMENT': 'Vui lòng đồng ý với các <span style=\"font-weight:bold;text-decoration:underline\">điều khoản sử dụng</span> của chúng tôi trước khi tiếp tục.',
            'L_REGISTERFAILED': 'Xảy ra lỗi trong quá trình xử lý dữ liệu, có thể do sự cố mạng khi kết nối đến máy chủ, vui lòng thử lại sau 5 giây.',
            'L_REGISTERCOMPLETED': 'Bạn đã đăng ký thành công tài khoản tại <span style=\"font-weight:bold;text-decoration:underline\">UpFile.vn</span>, 1 email chứa thông tin tài khoản sẽ được gửi cho bạn trong 5 giây tới, vui lòng <span style=\"font-weight:bold;text-decoration:underline\">đọc và làm theo hướng dẫn</span> để kích hoạt tài khoản.<br/><br/><span style=\"font-weight:bold;text-decoration:underline\">Lưu ý:</span> Nếu bạn không nhận được email, vui lòng thử kiểm tra thêm trong các mục <span style=\"font-weight:bold;text-decoration:underline\">Spam, Trash, Thư rác, Thư quảng cáo</span> trước khi liên hệ với bộ phận hỗ trợ.',
            'L_EXITMESSAGE': 'Quá trình xử lý dữ liệu chưa hoàn tất, bạn có thật sự muốn đóng (Bấm \"Stay on page\" hoặc \"Stay on this page\" để ở lại) ?',
            'L_ALREADYREGISTERED': 'Bạn đã đăng ký và đang đăng nhập.',
            'L_DRAG_DROP_FILE_HERE': 'NHẤP CHUỘT HOẶC KÉO THẢ FILES VÀO ĐÂY',
            'L_REGISTER_FOR_FREE': 'Đăng ký tài khoản miễn phí',
            'L_EMAIL': 'Email',
            'L_PASSWORD': 'Mật mã',
            'L_REPASSWORD': 'Nhập lại mật mã',
            'L_HOLDERNAME': 'Họ và tên',
            'L_PHONE': 'Số di động',
            'L_PLACEHOLDER_EMAIL': 'Địa chỉ email để nhận mã xác thực',
            'L_PLACEHOLDER_PASSWORD': 'Mật mã',
            'L_PLACEHOLDER_REPASSWORD': 'Nhập lại mật mã giống như trên',
            'L_PLACEHOLDER_HOLDERNAME': 'Tên chủ khoản',
            'L_PLACEHOLDER_PHONE': 'Số điện thoại liên lạc',
            'L_IAGREE': 'Tôi đã đọc, hiểu và đồng ý với các điều khoản sử dụng.',
            'L_TERMOFUSE': 'Điều khoản sử dụng',
            'L_PRIVACYPOLICY': 'Điều khoản riêng tư',
            'L_FAQ': 'Câu Hỏi',
            'L_BLOG': 'Blog',
            'L_SUPPORT': 'Hỗ trợ',
            'L_LOGIN_HERE': 'Đăng nhập hệ thống',
            'L_PLACEHOLDER_LOGINEMAIL': 'Địa chỉ email dùng để đăng ký',
            'L_PLACEHOLDER_LOGINPASSWORD': 'Mật mã đăng nhập',
            'L_SERVERBUSY': 'Hệ thống chưa xử lý dữ liệu hoàn tất, vui lòng thao tác lại sau.',
            'L_ALREADY_LOGGED_IN': 'Thao tác thất bại do bạn đã đăng nhập hệ thống.',
            'L_LOGINCOMPLETED': 'Đăng nhập hệ thống thành công, vui lòng chờ giây lát...',
            'L_LOGINFAILED': 'Có lỗi trong quá trình xử lý dữ liệu, có thể do sự cố mạng khi kết nối đến máy chủ, vui lòng thử lại sau 5 giây.',
            'L_FILEMANAGER': 'Quản lý file',
            'L_ACCOUNT': 'Tài khoản',
            'L_CONFIRM_EXIT': 'Bạn có thật sự muốn thoát khỏi hệ thống ?',
            'L_VERIFY_FILEHASH': 'Đang xác thực file: ',
            'L_UPLOAD_PENDING': 'Đang chờ đến lượt',
            'L_UPLOADED': 'Tải lên thành công',
            'L_UPLOADED_ERROR': 'Dữ liệu bị hủy do truy cập trái phép',
            'L_UNSUPPORTED_FILETYPE': 'Có lỗi xảy ra: Định dạng file này chưa được hỗ trợ.',
            'L_UNSUPPORTED_FILETYPE_ERROR': 'Đứt kết nối.',
            'L_CANNOT_CONNECT_TO_SERVER': 'Không thể kết nối đến máy chủ, vui lòng thử lại sau.',
            'L_CANNOT_CONNECT_TO_SERVER_ERRPR': 'Đứt kết nối.',
            'L_REMAINING_TIME': 'Thời gian còn lại',
            'L_DOWNLOAD': 'Download',
            'L_PROCESSING': 'Đang xử lý dữ liệu, vui lòng chờ...',
            'L_ERROR_GETFILEINFO': 'Không thể thực thi truy vấn chọn file',
            'L_FAILED_GETFILEINFO': 'Không tìm thấy file được yêu cầu',
            'L_DOWNLOAD_MESSAGE_GUEST': '<p>Hiện tại bạn chưa đăng nhập nên chỉ download với tốc độ 1 MB/s. Bạn nên <a href=\"http://upfile.vn\" target=\"_blank\" style=\"font-weight:bold\">Đăng nhập hoặc Đăng ký miễn phí</a> để download với tốc độ lên đến 3 MB/s.</p>',
            'L_DOWNLOAD_MESSAGE_MEMBER': '<p>Xin chào <b>[Name]</b>, hiện tại bạn là thành viên của UpFile.vn nên bạn được download với tốc độ lên đến 3 MB/s. Nếu bạn cần hỗ trợ, đừng ngần ngại gửi yêu cầu của bạn đến mục <a href=\"http://upfile.vn\" target=\"_blank\" style=\"font-weight:bold\">Hỗ trợ</a> của UpFile.vn',
            'L_DOWNLOAD_MESSAGE_VIP': '<p>Xin chào <b>[Name]</b>, hiện tại bạn là <b>Khách hàng VIP</b> của UpFile.vn. Do vậy bạn có thể tải file về ngay với tốc độ cực nhanh!</p>',
            'L_DOWNLOAD_PLEASEWAIT': 'Vui lòng chờ ([Number])',
            'L_DOWNLOAD_PROCESSING': 'Đang xử lý...',
            'L_DO_NOT_BLOCK_ADS': 'Vui lòng KHÔNG KHÓA QUẢNG CÁO từ UPFILE.VN',
            'L_START_DOWNLOAD': 'Bắt đầu Download',
            'L_SIZE': 'Kích thước',
            'L_UPLOADED_ON_DATE': 'Được tải lên vào ',
            'L_CANNOT_DRAGDROP_HERE': 'Xin lỗi, bạn KHÔNG ĐƯỢC thao tác KÉO THẢ tại vị trí này !',
            'L_USER_ACCOUNT_MANAGER': 'Quản lý tài khoản',
            'L_USER_WELCOME_MESSAGE': 'Chào mừng <span style=\"text-decoration:underline;font-weight:bold\">[Name]</span> trở lại, tại trang này, bạn sẽ có thể thay đổi thông tin, kiểm tra tình trang, nạp tiền và và nâng cấp tài khoản.',
            'L_USER_WELCOME_MESSAGE_HOME': 'Cảm ơn bạn đã sử dụng UpFile.vn, hiện tại UpFile.vn đã miễn phí 100%. Tốc độ download của thành viên lên đến 3 MB/s, kích thước file upload lên đến 4GB/file và không phải chờ đợi khi download file.',
            'L_USER_CURRENT_PASSWORD': 'Mật mã hiện tại',
            'L_USER_PASSWORD': 'Mật mã mới',
            'L_USER_PASSWORD2': 'Mật mã nhập lại mật mã mới',
            'L_USER_NAME': 'Tên tài khoản',
            'L_USER_PHONE': 'Số điện thoại',
            'L_USER_CURRENT_PASSWORD_NOTE': ' Bắt buộc để đổi thông tin.',
            'L_USER_EMAIL': 'Email',
            'L_USER_EMAIL_NOTE': 'Hệ thống sẽ gửi email xác thực nếu bạn đổi email.',
            'L_USER_PASSWORD_NOTE': 'Nhập mật mã bạn muốn thay đổi hoặc để trống.',
            'L_USER_NAME_NOTE': '',
            'L_USER_PHONE_NOTE': '',
            'ACCESS_DENINED': 'Truy cập bị từ chối.',
            'L_USER_UPDATE': 'Cập nhật',
            'L_USER_RESET': 'Nhập lại',
            'L_USER_UPDATE_SUCCESSFULLY': 'Thông tin tài khoản mới đã được lưu, bạn có thể tiếp tục thao tác trên hệ thống mà không cần <b>KHÔNG CẦN ĐĂNG NHẬP LẠI</b>.',
            'L_USER_UPDATE_SUCCESSFULLY_WITHOUT_EMAIL': 'Thông tin tài khoản mới đã được lưu, bạn có thể tiếp tục thao tác trên hệ thống mà không cần <b>KHÔNG CẦN ĐĂNG NHẬP LẠI</b>.<br/><br/><b>LƯU Ý:</b> Do bạn yêu cầu <b><u>thay đổi địa chỉ email</u></b>, nên chúng tôi cần xác nhận lại quyền sở hữu tài khoản. Hãy <b><u>kiểm tra email</u></b> và thực hiện theo hướng dẫn để hoàn tất thay đổi.',
            'L_USER_UPDATE_FAILED': 'Xảy ra lỗi trong quá trình xử lý dữ liệu, có thể do sự cố mạng khi kết nối đến máy chủ, vui lòng thử lại sau 5 giây.',
            'L_USER_STATUS': 'Loại tài khoản',
            'L_USER_ACCOUNT_UPGRADE': 'Nâng cấp tài khoản',
            'L_USER_UPGRADE_MESSAGE': 'Xin chào <span style=\"font-weight:bold;text-decoration:underline\">[Name]</span>, hiện tại, bạn còn <span style=\"font-weight:bold;text-decoration:underline\">[NumberOfDays] ngày</span> sử dụng dịch vụ chia sẻ dữ liệu tốc độ cao (VIP Account) của <span style=\"font-weight:bold;text-decoration:underline\">UpFile.vn</span>, bạn có thể mua thêm ngày sử dụng dịch vụ bằng <span style=\"font-weight:bold;text-decoration:underline\">Tin nhắn SMS</span> hoặc <span style=\"font-weight:bold;text-decoration:underline\">Thẻ cào điện thoại</span> theo các bước hướng dẫn bên dưới.',
            'L_USER_ACCOUNT_UPGRADE_SMS': 'Mua ngày VIP bằng tin nhắn SMS',
            'L_USER_ACCOUNT_UPGRADE_SMS_CONTENT': 'Soạn tin <b>[Content]</b> gửi đến <b>[Number]</b> (Phí dịch vụ: 15,000đ/SMS) để nhận được 3 ngày VIP tính từ thời điểm hệ thống nhận được tin nhắn (Hỗ trợ các mạng: Viettel, Mobifone, Vinaphone, Vietnamobile, Gmobile)',
            'L_USER_FILE_MANAGER': 'Quản lý dữ liệu',
            'L_ENTER_FOLDER_NAME': 'Nhập tên thư mục',
            'L_USER_FOLDERNAME_INVALID': 'Vui lòng nhập tên file / thư mục có tối thiểu 1 ký tự và không chứa các ký tự đặc biệt: \\ / : ? \" < > |',
            'L_USER_CREATEFOLDER_SUCCESSFULLY': 'Đã tạo thư mục <span style=\"text-decoration:underline;font-weight:bold\">[Name]</span> thành công !',
            'L_USER_CREATEFOLDER_FAILED': 'Có lỗi trong quá trình xử lý dự liệu, vui lòng thử lại sau.',
            'L_USER_DELETEITEM_CONFIRM_MESSAGE': 'Bạn có thật sự muốn xóa dữ liệu được chọn ? (Bao gồm: [NumberOfFolders] thư mục và [NumberOfFiles] file(s))',
            'L_USER_DELETEITEM_FAILED': 'Có lỗi trong quá trình xử lý dữ liệu cần xóa, vui lòng thử lại sau.',
            'L_USER_RENAMEBUTTON': 'Đổi tên',
            'L_USER_COPYBUTTON': 'Sao chép',
            'L_USER_CUTBUTTON': 'Cắt',
            'L_USER_DELETEBUTTON': 'Xóa',
            'L_USER_PASTEBUTTON': 'Dán',
            'L_ENTER_ITEM_NAME': 'Nhập tên mới',
            'L_USER_LOCKBUTTON': 'Khóa',
            'L_USER_UNLOCKBUTTON': 'Bỏ khóa',
            'L_ENTER_THE_NEW_FILENAME': 'Tôi muốn đổi tên file \"[name]\" thành:',
            'L_ENTER_THE_NEW_FOLDERNAME': 'Tôi muốn đổi tên thư mục \"[name]\" thành:',
            'L_USER_RENAMEITEM_FAILED': 'Đổi tên đối tượng thất bại, vui lòng thử lại sau.',
            'L_CHANGENAME_ERROR': 'Không thể thực thi truy vấn đổi tên đối tượng.',
            'L_USER_PASTE_ERROR': 'Có lỗi trong quá trình xử lý dữ liệu, vui lòng thử lại sau.',
            'L_USER_LOCK_ERROR': 'Có lỗi trong quá trình khóa dữ liệu, vui lòng thử lại sau',
            'L_USER_UNLOCK_ERROR': 'Có lỗi trong quá trình bỏ khóa dữ liệu, vui lòng thử lại sau',
            'L_USER_LOCKMESSAGER': 'Vui lòng nhập mật mã',
            'L_USER_LOCKFOLDER_ERROR': 'Không thể thực thi truy vấn thiết đặt lại mật mã cho thư mục được chọn.',
            'L_USER_LOCKFILE_ERROR': 'Không thể thực thi truy vấn thiết đặt lại mật mã cho file được chọn.',
            'L_USER_GETLINKBUTTON': 'Hiện liên kết tải',
            'L_USER_ROOTDIR': 'Thư mục gốc',
            'L_USER_MAILBOX': 'Hộp thư',
            'L_USER_CHECKING': 'Đang chọn',
            'L_USER_CLIPBOARD': 'Bảng nháp',
            'L_USER_TOTALVIEW': 'Tổng lượt xem tháng này',
            'L_USER_SUBJECT': 'Tiêu đề',
            'L_USER_REUPLOAD': 'Tải lại file',
            'L_USER_CONTENT': 'Nội dung',
            'L_USER_CONTACT_CONTENT_ERROR': 'Vui lòng nhập nội dung thư cụ thể hơn để chúng tôi có thể phân loại và hỗ trợ bạn nhanh hơn.',
            'L_USER_SEND': 'Gửi đi',
            'L_USER_CONTACT_ERROR': 'Có lỗi trong quá trình xử lý thư gửi đi, vui lòng thử lại sau.',
            'L_USER_CONTACT_COMPLETE': 'Thư của quí khách đã được chuyển đến bộ phận hỗ trợ, cảm ơn quí khách đã liên hệ.',
            'L_USER_MOVE': 'Di chuyển: ',
            'L_USER_FORCEDOWNLOAD': 'Tải xuống ngay',
            'L_USER_DOWNLOAD_FAILED': 'Tải file thất bại, vui lòng thử lại sau.',
            'L_USER_NOT_SUPPORT_FILESYSTEM': 'Xin lỗi, trình duyệt của bạn không hỗ trợ chức năng này. Hãy sử dụng Google Chrome nếu bạn muốn trải nghiệm thử !',
            'L_USER_DOWNLOAD_AUTHORIZEDKEY': 'Tạo khóa đăng nhập tự động',
            'L_USER_DOWNLOAD_MASTERKEY': 'Tạo mới và gửi yêu cầu kích hoạt khóa Master qua email',
            'L_USER_ENTER_PASSWORD': 'Bạn cần nhập đúng <span style=\"font-weight:bold;text-deocration:underline\">MẬT MÃ HIỆN TẠI</span> để kích hoạt chức năng này !',
            'L_USER_DOWNLOADKEY_ERROR': 'Không thể thực thực hiện tạo khóa, vui lòng thử lại sau',
            'L_LOGIN_BY_AUTHORIZEDKEY_ERROR': 'Có lỗi trong quá trình đăng nhập bằng Authorized Key, vui lòng thử lại sau !',
            'L_USER_CONFIRM_CREATE_AUTHORIZEDKEY': 'Bạn có thật sự muốn tạo khóa đăng nhập tự động (Authorized Key)',
            'L_USER_CONFIRM_CREATE_MASTERKEY': 'Bạn có thật sự muốn tạo khóa đăng nhập tự động (Master Key)',
            'L_USER_CREATEKEY_SUCCESSFULLY': 'Khóa đăng nhập tự động đã được tạo thành công, vui lòng bấm vào liên kết <b>Download</b> để tải khóa về máy.',
            'L_ERROR_BLOCK': 'Không thể thực thi truy vấn khóa các files được chọn',
            'L_FAILED_BLOCK': 'Các file được chọn đã được khóa trước đó.',
            'L_FORGOT_PASSWORD': 'Quên mật mã',
            'L_USER_CONTACT': 'Liên hệ với chúng tôi',
            'L_FORGOTPASSWORD_SUCCESSFULLY': 'Hệ thống đã nhận được và xử lý xong YÊU CẦU RESET MẬT MÃ của bạn, một email chứa liên kết đổi mật mã sẽ được gửi cho bạn trong 30 giây tới, vui lòng kiểm tra và làm theo hướng dẫn.',
            'L_FORGOTPASSWORD_FAILED': 'Hệ thống không xử lý được YÊU CẦU RESET mật mã do địa chỉ email bạn cung cấp KHÔNG TỒN TẠI trên hệ thống.',
            'L_RESETPASSWORD_SUBJECT': 'Yêu cầu lấy lại mật mã lúc [Date]',
            'L_RESETPASSWORD_CONTENT': '<p>Kính chào quí khách,</p><p>Hệ thống <b>UpFile.vn</b> có nhận được yêu cầu <b>tạo lại mật mã</b> cho tài khoản <span style=\"text-decoration:underline\">[Email]</span> (lúc [Date]) và đã xử lý thành công.</p><p>Nếu quí khách không phải là người gửi yêu cầu cho chúng tôi, vui lòng xóa email này ngay vì lý do bảo mật.</p><p>Để tiếp tục thực hiện tạo lại mật mã, quí khách vui lòng bấm vào liên kết sau đây: <a href=\"[Link]\">[Link]</a></p><p>Cảm ơn quí khách đã tin tưởng sử dụng dịch vụ UpFile.</p><p>Trân trọng,</p><p>- UpFile.vn -</p>',
            'L_RESETPASSWORD_OK_SUBJECT': 'Mật mã mới được tạo thành công lúc [Date]',
            'L_RESETPASSWORD_OK_CONTENT': '<p>Kính chào quí khách,</p><p>Yêu cầu tạo lại mật mã của quí khách đã được xử lý thành công, mật mã mới của quí khách là: <b>[Password]</b></p><p>Ngay thời điểm này ([Date]), quí khách có thể sử dụng mật mã cùng email <b>[Email]</b> để đăng nhập hệ thống.</p><p>Cảm ơn quí khách đã sử dụng dịch vụ của chúng tôi và chúc quí khách có những trải nghiệm thú vị cùng <b>UpFile.vn</b></p><p>Trân trọng,</p><p>- UpFile.vn -</p>',
            'L_USER_INTRO': 'Giới thiệu về công ty UpFile.vn',
            'L_USER_ACCOUNT_UPGRADE_VOUCHER': 'Nâng cấp tài khoản bằng UpFile Voucher',
            'L_USER_ACCOUNT_UPGRADE_VOUCHER_MESSAGE': 'Vui lòng nhập <b>UpFile Voucher</b> vào khung bên dưới để kích hoạt',
            'L_USER_ACCOUNT_UPGRADE_CARD': 'Nâng cấp tài khoản bằng thẻ cào (MobiFone, VinaPhone, Viettel, VTC, Gate, GMobile)',
            'L_USER_ACCOUNT_UPGRADE_CARD_MESSAGE': 'Vui lòng nhập <b>Số series</b> và <b>Mã thẻ cào (Phủ bạc)</b> vào khung bên dưới để kích hoạt',
            'L_USER_UPGRADE_SERIESNUMBER': 'Số Series',
            'L_USER_UPGRADE_CARDCODE': 'Mã thẻ cào',
            'L_USER_UPGRADE_BUTTON': 'Kích hoạt thẻ',
            'L_USER_UPGRADE_WRONG_SERIES': 'Vui lòng nhập đúng số Series !',
            'L_USER_UPGRADE_WRONG_CODE': 'Vui lòng nhập đã mã thẻ (dưới lớp phủ bạc) !',
            'L_USER_UPGRADE_CARD_ERROR': 'Xin lỗi, hệ thống đang quả tải, vui lòng thử lại sau !',
            'L_USER_UPGRADE_CARDTYPE': 'Loại thẻ',
            'L_USER_UPGRADE_CAPTCHA': 'Mã bảo vệ',
            'L_USER_UPGRADE_RETYPECAPTCHA': 'Nhập lại mã bảo vệ',
            'L_USER_UPGRADE_WRONG_CAPTCHA': 'Vui lòng nhập đúng mã bảo vệ (5 số)',
            'L_USER_UPGRADE_CARD_OK': 'Nạp thẻ thành công, thời hạn VIP của quí khách đã cộng thêm <u>[numDay] ngày</u> và sẽ hết hạn vào lúc <u>[Date]</u>. Cảm ơn quí khách đã tin tưởng và sử dụng dịch vụ của UpFile !',
            'L_USER_UPGRADE_BLOCK': 'Bạn đã nạp sai 3 lần, vui lòng thử lại sau [Date]',
            'L_FILE_LIMIT': 'File upload dung lượng tối đa 4 GB',
            'L_WRONG_DATATYPE': 'Kiểu dữ liệu không đúng.',
            'L_WRONG_DATATYPE_RELOAD': 'Có lỗi trong quá trình xác thực với trình duyệt, bạn cần tải lại trang trước khi tiếp tiếp tục.',
            'L_WRONG_EMAIL': 'Địa chỉ email không đúng, vui sử dụng địa chỉ email thật.',
            'L_WRONG_PASSWORD': 'Dữ liệu mật mã không đúng, vui lòng thao tác ngay trên website.',
            'L_WRONG_NAME': 'Vui lòng nhập tên hiển thị có tối thiểu 3 ký tự.',
            'L_EXIST_EMAIL': 'Địa chỉ Email này đã được sử dụng trong hệ thống.',
            'L_ERROR_INSERT': 'Không thể thực thi truy vấn thêm tài khoản.',
            'L_FAILED_INSERT': 'Truy vấn thêm tài khoản trả về giá trị 0.',
            'L_ERROR_LOGIN': 'Không thể thực thi truy vấn đăng nhập.',
            'L_FAILED_LOGIN': 'Đăng nhập thất bại do thông tin tài khoản không đúng.',
            'L_ERROR_LOGINCOOKIE': 'Không thể thực thi truy vấn đăng nhập bằng cookie.',
            'L_FAILED_LOGINCOOKIE': 'Không tìm thấy tài khoản thỏa điều kiện.',
            'L_ERROR_UPDATE': 'Không thể thực thi truy vấn cập nhật tài khoản.',
            'L_FAILED_UPDATE': 'Dữ liệu mới tài khoản không có thay đổi so với dữ liệu hiện tại.',
            'L_ERROR_DELETE': 'Không thể thực thi truy vấn xóa tài khoản.',
            'L_FAILED_DELETE': 'Không có tài khoản nào thỏa điều kiện để xóa.',
            'L_ERROR_CHECKEMAIL': 'Không thể thực thi truy vấn kiểm tra Email.',
            'L_ERROR_GET': 'Không thể thực thi truy vấn chọn tài khoản,',
            'L_ERROR_COUNT': 'Không thể thực thi truy vấn đếm tài khoản.',
            'L_ERROR_GETLIST': 'Không thể thực thi truy vấn chọn danh sách tài khoản.',
            'L_ERROR_LIMIT_ACCOUNT': 'Không thể thực thi truy vấn kiểm tra giới hạn tài khoản',
            'L_LIMIT_ACCOUNT': 'Bạn đã tạo quá số lượng tài khoản qui định trong hôm nay.',
            'L_WELCOME_SUBJECT': 'Thông tin tài khoản tại UpFile.vn khởi tạo lúc [Date]',
            'L_WELCOME_MESSAGE': 'Kính gửi khách hàng [Name]<br/><br/>Cảm ơn quí khách đã đăng ký và sử dụng dịch vụ của chúng tôi tại <a href=\"http://upfile.vn\">UpFile.vn</a>, đây là thông tin đăng ký của quí khách:<br/><br/>+ <b>Email:</b> [Email]<br/>+ <b>Tên chủ khoản:</b> [Name]<br/>+ <b>Số điện thoại:</b> [Phone]<br/>+ <b>Mật mã:</b> [Đã được mã hóa]*<br/><br/>Lưu ý: Khi sử dụng dịch vụ của <a href=\"http://upfile.vn\">UpFile.vn</a>, quí khách cần tuyệt đối tuân thủ các điều khoản của chúng tôi. Đội ngũ quản lý <a href=\"http://upfile.vn\">UpFile.vn</a> có quyền vô hiệu hóa tài khoản của quí khách mà không cần báo trước.<br/><br/>* Mật mã của quí khách được mã hóa nhiều tầng bởi thuật toán SHA-256 (256 bit) và không thể giải mã, điều này có nghĩa là ngoại trừ quí khách, không ai biết được mật mã của quí khách kể cả chúng tôi - những người quản trị hệ thống <a href=\"http://upfile.vn\">UpFile.vn</a> .<br/><br/>Một lần nữa, xin cảm ơn quí khách đã tin tưởng và dành thời gian cho <a href=\"http://upfile.vn\">UpFile.vn</a>, chúc quí khách có những trải nghiệm thú vị.<br/><br/><b>- UpFile Team -</b>',
            'L_WRONG_CURRENT_PASSWORD': 'Mật mã hiện tại không chính xác, vui lòng kiểm tra lại !',
            'L_FAILED_UPDATEACCOUNT': 'Dữ liệu mới <b>không có thay đổi</b> hoặc bạn đã <b>nhập sai mật mã hiện tại</b>, vui lòng kiểm tra lại !',
            'L_WRONG_PHONE': 'Số điện thoại không đúng !',
            'L_CHANGEEMAIL_SUBJECT': 'Yêu cầu đổi Email cho tài khoản tại UpFile.vn lúc [Date]',
            'L_CHANGEEMAIL_MESSAGE': 'Kính gửi khách hàng <b>[Name]</b>,<br/><br/>Hệ thống <a href=\"http://upfile.vn\"><b>UpFile.vn</b></a> có nhận được yêu cầu thay đổi email cho tài khoản của quí khách từ email hiện tại (<b>[OldEmail]</b>) sang email mới là <b>[NewEmail]</b> vào lúc <u>[Date]</u> tại địa chỉ IP: [IP].<br/><br/>Để đảm bảm tính bảo mật cho tài khoản của quí khách, <a href=\"http://upfile.vn\"><b>UpFile.vn</b></a> cần quí khách xác nhận lại với chúng tôi một lần nữa bằng cách bấm vào liên kết sau đây: <a href=\"[ActivateLink]\">[ActivateLink]</a>.<br/><br/>* <b>LƯU Ý:</b>Nếu quí khách <b>KHÔNG THỰC HIỆN GỬI YÊU CẦU ĐỔI EMAIL</b>, rất có thể mật mã của quí khách đã bị lộ, vì vậy, chúng tôi khuyên quí khách <b>THỰC HIỆN ĐỔI MẬT MÃ</b> ngay khi nhận được email này.<br/><br/><b>- UpFile Team -</b>',
            'L_USER_SUBJECT_ACTIVE_MASTERKEY': 'Yêu cầu kích hoạt khóa Master tạo lúc [Date]',
            'L_USER_CONTENT_ACTIVE_MASTERKEY': 'Kính gửi khách hàng <b>[Name]</b><br/><br/>Vào lúc [Date], hệ thống chúng tôi có nhận được yêu cầu tạo khóa Master (Master Key) - dùng để đăng nhập tự động.<br/><br/><p style=\"color:#5e5e5e;font-style:italic;\"><b>(*) AUTHORIZED KEY:</b> Giúp bạn đăng nhập hệ thống tự động mà không cần nhập liệu - tăng cường bảo mật cho tài khoản khi truy cập hệ thống ở máy tính lạ. <b>AUTHORIZED KEY</b> sẽ bị mật hiệu lực khi bạn thực hiện <b>đổi mật mã</b>.</p><p style=\"color:#5e5e5e;font-style:italic;\"><b>(*) MASTER KEY:</b> Chức năng giống <b>Authorized Key</b> nhưng <b>không bị mất hiệu lực</b> khi bạn thực hiện đổi mật mã. Bạn có thể <b>vô hiệu hóa</b> khóa master hiện tại bằng cách tạo khóa master mới - khóa này cần được kích hoạt qua email (lần đầu) để có thể sử dụng được.</p>Nếu quí khách thật sự muốn kích hoạt khóa Master mới, vui lòng bấm vào liên kết bên dưới để kích hoạt, xin lưu ý rằng thao tác này đồng thời sẽ làm vô hiệu hóa tất cả các khóa Master được tạo trước đó.<br/><br/><b>Liên kết kích hoạt:</b> <a href=\"[Link]\">[Link]</a><br/><br/>Nếu quí khách vô tình làm mất khóa hoặc chưa tải được khóa, quí khách có thể tạo khóa thủ công bằng cách tạo 1 file tên <b>[FileName]</b> với nội dung <b>[Content]</b><br/><br/>Cảm ơn quí khách đã sử dụng dịch vụ của chúng tôi.<br/><br/><b>- UpFile Team -</b>',
            'L_LOGINKEY_ERROR': 'Không thể thực thi truy vấn kiểm tra tài khoản bằng Authorized Key',
            'L_LOGINKEY_FAILED': 'Tài khoản này không tồn tại hoặc đã bị vô hiệu hóa',
            'L_LOGINKEY_INVALID': 'Authorized Key này đã bị vô hiệu hóa !',
            'L_LOGINMASTERKEY_INVALID': 'Master Key này đã bị vô hiệu hóa !',
            'L_LOGINMASTERKEY_ERROR': 'Không thể thực thi truy vấn kiểm tra tài khoản bằng Master Key',
            'L_LOGINMASTERKEY_FAILED': 'Tài khoản này không tồn tại hoặc đã bị vô hiệu hóa',
        };</script>
    <link href='http://upfile.vn/view/default/css/upfile.css?1644902189' type='text/css' rel='stylesheet'/>
    <script>isLogged = false;</script>
    <script src='{{asset('js/core/main.js')}}'></script>
{{--    <script src="http://upfile.vn/view/default/js/ZeroClipboard.js"></script>--}}
    <script>        function setupCopyAllLink() {
            $('.copyAllLink').each(function () {
                var clip = new ZeroClipboard(this, {
                    moviePath: "http://upfile.vn/view/default/js/ZeroClipboard.swf",
                    text: $('.copyAllLink').attr('data-clipboard-text')
                });
                clip.on('complete', function (client, args) {
                    alert("Đã lưu nhớ đường dẫn. Bạn bấm CTRL + V để dán đường dẫn vào nơi cần chia sẻ.");
                });
            });
        }        </script>
</head>
<body>
<div id='Header'><a href='http://upfile.vn/' class='Logo'></a>
    <ul>
        <li><a href='http://upfile.vn/' title='Trang chủ' class='Hover'>Trang chủ</a></li>
        <li><a href='http://upfile.vn/blog/WyzipMGi4ZSo/gioi-thieu-chung-ve-upfile-vn.html' title='Giới thiệu'>Giới
                thiệu</a></li>
        <li class='User'><a rel='nofollow' href='http://upfile.vn/user/' title='Tài khoản'>Tài khoản</a></li>
        <li class='User'><a rel='nofollow' href='http://upfile.vn/filemanager/' title='Quản lý file'>Quản lý file</a>
        </li>
        <li class='User'><a rel='nofollow' onclick='return Logout();' title='Đăng xuất'>Đăng xuất</a></li>
        <li><a href='http://upfile.vn/contact/' title='Liên hệ'>Liên hệ</a></li>
    </ul>
</div>
<!--    <div class="BannerWrapper" style="width: 110px; height: 453px; float:left; padding-top: 25px;">    </div>    <div class="BannerWrapper" style="width: 110px; height: 453px; float:right; padding-top: 25px;">    </div>    <div id='Download' align="Center">    -->
<div style="width: 970px; margin: auto;">
{{--    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>        <!-- 970x90 -->--}}
{{--    <ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px"--}}
{{--         data-ad-client="ca-pub-4972220225382593" data-ad-slot="1024412065"></ins>--}}
{{--    <script>            (adsbygoogle = window.adsbygoogle || []).push({});        </script>--}}
</div>
{{--<div id='Banner'><h1>Upload File & Chia Sẻ File Miễn Phí Cực Nhanh!</h1>--}}
{{--    <h2>ĐĂNG KÝ TÀI KHOẢN ĐỂ DOWNLOAD 3 MB/S <span style='font-size:40px;color:#9e2d2d;'>FREE!</span></h2>--}}
{{--    <div class='progressPanel'>--}}
{{--        <div class='Bar'>--}}
{{--            <div class='Background'></div>--}}
{{--            <span class='Title'>NHẤP CHUỘT HOẶC KÉO THẢ FILES VÀO ĐÂY</span></div>--}}
{{--    </div>--}}
{{--</div>--}}
{{--<div id='uploadPanel'><h1>Tiến trình tải lên</h1></div>--}}
<div id='Body'>
    <div class='Intro'>
        <div class='leftSide'><h1>Chào mừng bạn đến với UpFile.vn!</h1>
            <p>Bắt đầu từ ngày 01/12/2014 UpFile.vn thực hiện chính sách miễn phí 100%. Không còn tài khoản trả phí
                nữa.</p>
            <p><b>Với thành viên của UpFile.vn, giờ đây bạn có thể:</b></p>
            <p> - Upload file lên đến 4 GB/file</br>                    - Thời gian lưu trữ file tính từ lần download
                cuối là 60 ngày</br>                    - Không phải chờ đợi khi download file</br>                    -
                Tốc độ download file lên đến 3 MB/s.</br>                    <span style='color:red'><b>Tất cả FREE!</b></span>
            </p></div>
        <div class='rightSide'>
            <form method='post' id='frmRegister'><h1>Convert APK to AAB</h1>
                <div class='Field'>
                    <div class='leftColumn'>Email (*)</div>
                    <div class='rightColumn'><input type='text' name='Email' data-check='Email'
                                                    placeholder='Địa chỉ email để nhận mã xác thực' autocomplete='off'/>
                    </div>
                </div>
{{--                <div class='Field'>--}}
{{--                    <div class='leftColumn'>Mật mã (*)</div>--}}
{{--                    <div class='rightColumn'><input type='password' name='Password' data-check='Password'--}}
{{--                                                    placeholder='Mật mã'/></div>--}}
{{--                </div>--}}
{{--                <div class='Field'>--}}
{{--                    <div class='leftColumn'>Nhập lại mật mã (*)</div>--}}
{{--                    <div class='rightColumn'><input type='password' name='RePassword' data-check='ComparePassword'--}}
{{--                                                    placeholder='Nhập lại mật mã giống như trên'/></div>--}}
{{--                </div>--}}
                <div class='Field'>
                    <div class='leftColumn'>Họ và tên (*)</div>
                    <div class='rightColumn'><input type='text' name='Name' data-check='Name'
                                                    placeholder='Tên chủ khoản' autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <div class='leftColumn'>Số di động</div>
                    <div class='rightColumn'><input type='text' name='Phone' data-check='Phone'
                                                    placeholder='Số điện thoại liên lạc' autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <div class='leftColumn'>File</div>
                    <div class='rightColumn'><input type='file' name='File' data-check='File' accept=".zip"
                                                   autocomplete='off'/></div>
                </div>
                <div class='Field'>
                    <br/>
                    <div class='leftColumn'>&nbsp;</div>
                    <div class='rightColumn'><div class="g-recaptcha" data-sitekey="{{config('services.recaptcha.key')}}"></div>
                    </div>
                </div>

{{--                <div class='Field'><a class='Agreement'>Tôi đã đọc, hiểu và đồng ý với các điều khoản sử dụng.</a></div>--}}
                <div class='Field'>
                    <a href='#Convert' class='Register'>Convert</a>
{{--                    <a href='#Login' class='Login' onclick='Login()'>Đăng nhập</a>--}}
                    <input type='submit'/></div>
            </form>
{{--            <form method='post' id='frmLogin'><h1>Đăng nhập hệ thống</h1>--}}
{{--                <div class='Field'>--}}
{{--                    <div class='leftColumn'>Email (*)</div>--}}
{{--                    <div class='rightColumn'><input type='text' name='Email' data-check='Email'--}}
{{--                                                    placeholder='Địa chỉ email dùng để đăng ký' autocomplete='off'/>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class='Field'>--}}
{{--                    <div class='leftColumn'>Mật mã (*)</div>--}}
{{--                    <div class='rightColumn'><input type='password' name='Password' data-check='Password'--}}
{{--                                                    placeholder='Mật mã đăng nhập'/></div>--}}
{{--                </div>--}}
{{--                <div class='Field'><a href='#Login' class='Login'>Đăng nhập</a> <a href='#Register' class='Register'--}}
{{--                                                                                   onclick='Register()'>Đăng ký</a> <a--}}
{{--                        href='#forgotPassword' class='forgotPassword'>Quên mật mã</a> <input type='submit'/></div>--}}
{{--            </form>--}}
        </div>
    </div>


    <div class='userMessage'><h1>Convert thành công</h1>
        <p>Cảm ơn bạn đã sử dụng dịch vụ, hiện tại UpFile.vn đã miễn phí 100%. Tốc độ download của thành viên lên đến
            3 MB/s, kích thước file upload lên đến 4GB/file và không phải chờ đợi khi download file.</p></div>
</div>
<div id='uploadPanel'><h1>Tiến trình tải lên</h1></div>
<div id='Footer'>
    <ul class='Links'>
        <li><a href='http://upfile.vn' title='Trang chủ'>Trang chủ</a></li>
        <li><a href='http://upfile.vn/blog/doGihlSBpySi/cau-hoi-thuong-gap-tai-upfile-vn.html' title='Câu Hỏi'>Câu
                Hỏi</a></li>
        <li><a href='http://hotro.upfile.vn' title='Hỗ trợ' target="_blank">Hỗ trợ</a></li>
        <li><a href='http://upfile.vn/blog/X7ziWZGihMzi/dieu-khoan-su-dung-upfile-vn.html' title='Điều khoản sử dụng'>Điều
                khoản sử dụng</a></li>
        <li><a href='http://upfile.vn/blog/4yziWZOBWyzo/dieu-khoan-rieng-tu-upfile-vn.html' title='Điều khoản riêng tư'>Điều
                khoản riêng tư</a></li>
        <li><a href='http://upfile.vn/contact/' title='Liên hệ'>Liên hệ</a></li>
    </ul>
</div>
<script>  (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-46696135-1', 'auto');
    ga('send', 'pageview');</script>
</body>