import { Content, Envelope, Mailable } from "../../src";

class DummyMail extends Mailable {
  constructor(protected shouldQueue = false) {
    super();
  }

  public async envelope() {
    return new Envelope({
      to: "dummy@mail.com",
      subject: "Test Email",
      cc: [],
      bcc: [],
    });
  }

  public async content() {
    const html = this.shouldQueue
      ? "send dummy queue email"
      : "send dummy email";
    return new Content({ html });
  }
}
export default DummyMail;
