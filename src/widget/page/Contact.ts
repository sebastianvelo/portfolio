import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { email, linkedin, github, codepen, codesignal } from "widget/data/ContactData";
import { contact } from "widget/data/SectionsData";

const Contact: Page = {
  route: Route.CONTACT,
  rows: [
    {
      cards: [contact.toCardIndex()],
    },
    {
      cards: [linkedin.toCard(), github.toCard()],
    },
    {
      cards: [codesignal.toCard(), codepen.toCard()],
    },
    {
      cards: [email.toCard()],
    },
  ],
};

export default Contact;
