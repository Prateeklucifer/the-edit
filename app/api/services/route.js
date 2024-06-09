import ConnectToDB from "@/DB/ConnectToDB";
import Services from "@/schema/Services";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Services.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Services.create(
        {
          title: "Branding & Identity",
          paragraph:
            "theEdit goes beyond just logos. We help you develop a strong brand identity that resonates with your target audience. From crafting a unique logo to establishing a consistent visual language across all platforms, we'll ensure your brand is instantly recognizable and memorable.",
        },
        {
          title: "Website Design & Development",
          paragraph:
            "Your website is often the first impression potential customers have of your business. theEdit creates stunning and user-friendly websites that not only look great but also convert visitors into leads or sales. We handle everything from initial concept to development and launch, ensuring your website is optimized for both performance and aesthetics.",
        },
        {
          title: "User Interface (UI) & User Experience (UX) Design",
          paragraph:
            "At theEdit, we understand that good design is not just about how something looks, but also about how it functions. Our UI/UX design services focus on creating intuitive and user-friendly experiences that cater to your target audience's needs. We'll ensure your website or application is easy to navigate and use, keeping users engaged and coming back for more.",
        },
        {
          title: "Design Strategy & Consulting",
          paragraph:
            "Need help navigating the ever-evolving design landscape? theEdit offers design strategy and consulting services to help you make informed design decisions. We can advise on current design trends, best practices, and how to leverage design to achieve your specific business objectives.",
        }
      );

      let allData = await Services.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
