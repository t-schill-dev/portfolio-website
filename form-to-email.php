<?php
  
        if($_POST) {
            $visitor_name = "";
            $visitor_email = "";
            $visitor_message = "";
            $email_body = "<div>";
              
            if(isset($_POST['visitor_name'])) {
                $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
                $email_body .= "<div>
                                   <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                                </div>";
            }
         
            if(isset($_POST['visitor_email'])) {
                $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
                $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
                $email_body .= "<div>
                                   <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                                </div>";
            }       
                          
            if(isset($_POST['visitor_message'])) {
                $visitor_message = htmlspecialchars($_POST['visitor_message']);
                $email_body .= "<div>
                                   <label><b>Visitor Message:</b></label>
                                   <div>".$visitor_message."</div>
                                </div>";
            }
              
            $recipient = 'timonschill@googlemail.com';
              
            $email_body .= "</div>";
         
            $headers  = 'MIME-Version: 1.0' . "\r\n"
            .'Content-type: text/html; charset=utf-8' . "\r\n"
            .'From: ' . $visitor_email . "\r\n";
              
            if(mail($recipient, $email_title, $email_body, $headers)) {
                echo "<p>Thank you for your message, $visitor_name. I will get back to you as soon as possible.</p>";
            } else {
                echo '<p>Sorry but the email did not go through :( </p>';
            }
              
        } else {
            echo '<p>Something went wrong</p>';
        }
        ?>