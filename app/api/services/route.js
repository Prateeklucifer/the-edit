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
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a quasi, ullam velit in eveniet ipsa doloribus. Aliquid blanditiis, neque sunt temporibus est mollitia porro unde, odit ex omnis excepturi corporis ratione, placeat perspiciatis. Natus blanditiis nobis repellendus eius minima, hic quam quisquam accusantium!",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a quasi, ullam velit in eveniet ipsa doloribus. Aliquid blanditiis, neque sunt temporibus est mollitia porro unde, odit ex omnis excepturi corporis ratione, placeat perspiciatis. Natus blanditiis nobis repellendus eius minima, hic quam quisquam accusantium!",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a quasi, ullam velit in eveniet ipsa doloribus. Aliquid blanditiis, neque sunt temporibus est mollitia porro unde, odit ex omnis excepturi corporis ratione, placeat perspiciatis. Natus blanditiis nobis repellendus eius minima, hic quam quisquam accusantium!",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a quasi, ullam velit in eveniet ipsa doloribus. Aliquid blanditiis, neque sunt temporibus est mollitia porro unde, odit ex omnis excepturi corporis ratione, placeat perspiciatis. Natus blanditiis nobis repellendus eius minima, hic quam quisquam accusantium!",
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
