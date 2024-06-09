import ConnectToDB from "@/DB/ConnectToDB";
import About from "@/schema/About";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await About.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await About.create({
        mainTitle: "Design Focused on Your Success",
        para1:
          "theEdit is a passionate team of designers dedicated to crafting impactful and results-oriented design solutions. We believe that good design is more than just aesthetics; it's a strategic tool that can elevate your brand, engage your audience, and drive business growth.",
        para2:
          "With a keen eye for detail and a commitment to collaboration, we work closely with our clients to understand their unique needs and goals. We translate those insights into creative solutions that are not only beautiful but also functional and effective.",

        secondaryTitle: "At theEdit, our ultimate goal is your success",
        para3:
          "We don't just create pretty pictures. Our focus is on designing websites, logos, and experiences that resonate with your target audience, drive engagement, and achieve your specific business objectives.",
        para4:
          "We believe in fostering strong relationships with our clients. We take the time to understand your vision and work collaboratively to bring it to life, ensuring a successful outcome and a long-lasting partnership.",
      });

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
