import { getServerSession } from "next-auth"

import { authOptions } from "@/app/libs/authOption"

export default async function getSession() { return await getServerSession(authOptions) }