
module.exports.mail = {
  type: 'ses'
  config: {
    from: '',
    transporter: {
      accessKeyId: '',
      secretAccessKey: '',
    }
  }
  templete: {
    orderConfirm: {
      sendBy: 'email',
      subject: '訂單 %(orderSerialNumber)s 成立通知信',
      html: """<html><body>
      <br />親愛的%(storeName2)s顧客您好!
      <br />
      <br />誠摯感謝您選購%(storeName3)s平台精心揀選的優質商品!
      <br />網站成立的宗旨是希望能與更多懂生活的人一同分享及找回生活中的理想樂園，
      <br />創而有意團隊在此預祝您擁有愉悅且舒適的每一天!
      <br />
      <br />以下為您於%(orderTime)s的訂購記錄，
      <br />
      <br />訂購人：%(shipmentUsername)s
      <br />訂購帳號：%(shipmentId)s
      <br />訂單編號：%(orderSerialNumber)s
      <br />付款方式：
      <br />付款方式備注：為避免取消訂單，請於%(deadLine)s前繳款完畢
      <br />
      <br />訂購項目：
      <br />%(productName)s
      <br />
      <br />為了保障您的資料安全，請登入會員中心查詢90天內所有訂單詳細資訊。
      <br />祝您購物愉快
      <br />此為系統信件，請勿直接回覆此信件
      <br />---
      <br />%(storeName)s | 好物慢慢選
      <br />客服信箱：%(serviceMail)s
      <br />上班時間：週一至週五，10.00AM - 5.00PM，比照國定休假日
      </body></html>"""
    },
    paymentConfirm: {
      sendBy: 'email',
      subject: '訂單 %(orderSerialNumber)s 已確認付款完成',
      text: """
      Hi %(username)s:

      您的付款已經確認，
      我們會盡快為您安排出貨事宜。

      From %(storeName)s
      """
    },
    deliveryConfirm: {
      sendBy: 'email',
      subject: '訂單 %(orderSerialNumber)s 已完成出貨',
      text: """
      Hi %(username)s:

      商品已出貨完成

      感謝你的訂購

      From %(storeName)s
      """
    },
    orderSync: {
      sendBy: 'email',
      subject: '使用者 email %(email)s 訂單查詢要求連結',
      html: """
      <br />Hi %(username)s:

      <br />請點選下列連結取得訂單資訊

      <br /><a href='%(syncLink)s'>取得訂單資訊</a>


      <br />From %(storeName)s
      """
    },
    greeting: {
      sendBy: 'email',
      subject: '歡迎 %(username)s 加入ＯＯＯ會員',
      html: """
      <p>歡迎 %(username)s 註冊 %(storeName)s ！</p>
      """
    },
    checkForgot:{
      sendBy: 'email',
      subject: '%(storeName)s - 忘記密碼通知信',
      html: """
      Dear %(username)s , 您好！<br>
      <blockquote>
        是您在我們的系統中忘記密碼了嗎！？<br>
        若是您忘記了密碼，點選以下連結會幫您重置密碼，並寄到您的信箱<br>
        <a href='%(link)s'>Click Me</a><br><br>
        若不是您，您可以選擇忽略此封郵件。<br><br>
        感謝您！<br>
        %(storeName)s
      </blockquote>
      """
    },
    newPassword:{
      sendBy: 'email',
      subject: '%(username)s - 新密碼通知信',
      html: """
      Dear %(username)s , 您好！<br>
      <blockquote>
        我們已經幫你重置好密碼摟！！<br>
        請妥善保管下列密碼並儘速更換。<br><br>
        新密碼為：<p style="color:red">%(password)s</p><br><br>
        感謝您！<br>
        %(storeName)s
      </blockquote>
      """
    },
    verification:{
      sendBy: 'email',
      subject: '%(username)s - 新帳號註冊通知',
      html: """
      Dear %(username)s , 您好！<br>
      <blockquote>
        感謝您註冊我們的服務，請點選以下連結開通帳號<br>
        <a href='%(link)s'>Click Me</a><br><br>
        若不是您，您可以選擇忽略此封郵件。<br><br>
        謝謝！<br>
        %(storeName)s
      </blockquote>
      """
    }
  }
}
