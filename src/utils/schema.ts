import * as yup from "yup";

export const contactUsSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Илтимос исмнигизни киритинг")
      .min(2, "Алифбо сони 2 та дан кам бўлмаслиги керак")
      .max(25, "Алифбо сони 25 та дан ошмаслиги керак"),
    tel: yup
      .string()
      .test("is-filled", "Телефон рақами киритиш шарт!", (value: any) => {
        // Check if the value contains any numeric characters
        return /\d/.test(value);
      })
      .required("Илтимос телефон рақамингизни киритинг")
      .matches(
        /^\+998 \d{2} \d{3} \d{4}$/,
        "Телефон рақамининг нотўғри формати"
      ),
    description: yup
      .string()
      .required("Илтимос изох йозинг")
      .min(3, "Алифбо сони 3 та дан кам бўлмаслиги керак"),
  })
  .required();

export const sendRequestSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Илтимос исмнигизни киритинг")
      .min(5, "Алифбо сони 5 та дан кам бўлмаслиги керак")
      .max(30, "Алифбо сони 25 та дан ошмаслиги керак"),
    tel: yup
      .string()
      .test("is-filled", "Телефон рақами киритиш шарт!", (value: any) => {
        // Check if the value contains any numeric characters
        return /\d/.test(value);
      })
      .required("Илтимос телефон рақамингизни киритинг")
      .matches(
        /^\+998 \d{2} \d{3} \d{4}$/,
        "Телефон рақамининг нотўғри формати"
      ),
    description: yup
      .string()
      .required("Илтимос изох йозинг")
      .min(3, "Алифбо сони 3 та дан кам бўлмаслиги керак"),
  })
  .required();
