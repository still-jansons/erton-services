"use server";

import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function submitContact(
  prevState: { message: string; status: string },
  formData: FormData,
): Promise<{ message: string; status: string }> {
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    surname: formData.get("surname"),
    message: formData.get("message"),
  };

  const columns = {
    email: "fldBZuy1TpfM5v4QF",
    name: "fld8R4hC8f19WAOti",
    surname: "fldnTrqOjI4blooOf",
    message: "fldOJHoyzBd7ZT1ir",
    status: "fldzHaLGpCF22fq8t",
  };

  // Check if the email is already in the waitlist
  try {
    await new Promise((resolve, reject) =>
      base(process.env.AIRTABLE_TABLE_CONTACTS!)
        .select({
          view: "Grid view",
          filterByFormula: `{${columns.email}} = '${data.email}'`,
        })
        .firstPage((err, records) => {
          if (err) {
            reject("Något gick fel. Vänligen försök igen senare.");
            return;
          }

          if (records && records.length > 0) {
            reject("Email är redan registrerad!");
            return;
          }

          resolve(true);
        }),
    );
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }

  // Insert the new record
  try {
    await new Promise((resolve, reject) => {
      base(process.env.AIRTABLE_TABLE_CONTACTS!).create(
        [
          {
            // @ts-ignore
            fields: {
              [columns.name]: data.name,
              [columns.surname]: data.surname,
              [columns.email]: data.email,
              [columns.message]: data.message,
              [columns.status]: "Todo",
            },
          },
        ],
        function (err: any) {
          if (err) {
            reject("Något gick fel. Vänligen försök igen senare.");
            return;
          }

          resolve(true);
        },
      );
    });

    return {
      message: "Tack för ditt meddelande! Vi återkommer snart.",
      status: "success",
    };
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }
}
