import ConnectToDB from "@/DB/ConnectToDB";
import FAQs from "@/schema/FAQs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await FAQs.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await FAQs.create(
        {
          title: "What design services does theEdit offer?",
          paragraph:
            "theEdit offers a comprehensive range of design services, including logo design, website design and development, user interface (UI) and user experience (UX) design, and more.",
        },
        {
          title: "Can theEdit help me with branding?",
          paragraph:
            "Absolutely! Logo design is just one aspect of branding, and theEdit can help you develop a cohesive brand identity that extends across all your touchpoints.",
        },
        {
          title: "What is the design process like at theEdit?",
          paragraph:
            " theEdit follows a collaborative design process that begins with a consultation to understand your needs and goals. We'll then develop concepts, gather your feedback, and refine the design until you're happy with the final product.",
        },
        {
          title: "How long does the design process typically take?",
          paragraph:
            "The timeframe will vary depending on the scope of your project. However, theEdit will work closely with you to establish realistic deadlines.",
        }
      );

      let allData = await FAQs.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
