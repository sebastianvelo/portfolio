import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { email, linkedin, github, codepen } from "widget/data/ContactData";
import { contact } from "widget/data/IndexesData";

const Contact: Page = {
  route: Route.CONTACT,
  rows: [
    {
      cards: [contact.toCardIndex()],
    },
    {
      cards: [email.toCard(), linkedin.toCard()],
    },
    {
      cards: [github.toCard(), codepen.toCard()],
    },
  ],
};

export default Contact;
