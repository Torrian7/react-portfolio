import Button from "./Button";

const SendEmail = () => {
  function sendEmai() {
    window.open(
      "spellstorrian90@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <Button className="sendemail-btn" onClick={sendEmai}>
      Send Email
    </Button>
  );
};

export default SendEmail;
