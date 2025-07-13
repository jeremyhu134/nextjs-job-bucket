import clientPromise from "../../../lib/mongodb"; // adjust if path differs
import { ObjectId } from "mongodb";
import { auth } from "../../../lib/auth";
import { NextResponse, NextRequest } from "next/server";


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
    try {
        const session = await auth();
        if (!session) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const { id: jobId } = await params; // Correctly access the id from the destructured params object

        if (!ObjectId.isValid(jobId)) {
            return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("cluster0");

        // delete only if the job belongs to this user
        const result = await db.collection("applications").deleteOne({
            _id: new ObjectId(jobId),
            userEmail: session.user?.email,
        });

        if (result.deletedCount === 0) {
            return NextResponse.json(
            { error: "Job not found or not authorized" },
            { status: 404 }
            );
        }

        return NextResponse.json({ message: "Job deleted successfully" });
    } catch (error) {
        console.error("Failed to delete job:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
