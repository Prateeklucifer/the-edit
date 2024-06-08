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
        mainTitle: "Empowering You to Save Lives",
        para1:
          "At Jeevan Dhara, we believe in the extraordinary power of everyday people to create positive change. Our mission is simple: Empowering You to Save Lives. We achieve this by providing a user-friendly platform that connects volunteer blood donors with local donation centers. Through education, streamlined processes, and a commitment to community, we aim to make blood donation accessible and impactful for everyone.",
        para2:
          "Together, with your selfless act of donation, we can ensure a constant supply of life-saving blood for those in need.",
        secondaryTitle: "Making a Difference, One Donation at a Time",
        para3:
          "Blood transfusions are critical for surgeries, accident victims, and those battling illnesses. A single blood donation can save up to three lives. By streamlining the donation process and connecting you with local centers in need.",
        para4:
          "Jeevan Dhara empowers you to make a real difference in someone's life. Every donation counts – join the movement and be a hero!",
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
