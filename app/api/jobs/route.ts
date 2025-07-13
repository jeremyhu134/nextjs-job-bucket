import clientPromise from "../../lib/mongodb";
import { NextResponse } from "next/server";
import { auth } from '../../lib/auth';
import { redirect } from "next/navigation";


export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) {
            redirect('/'); // Redirect to home if not authenticated
        }

        const body = await req.json();

        const client = await clientPromise;
        const db = client.db("cluster0");

        const result = await db.collection("applications").insertOne(body);

        return NextResponse.json({ message: "Job added!", id: result.insertedId });
    } catch (error) {
        console.error("Failed to add job:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}