import { dev } from "$app/environment";

export async function load(context) {
    let ps;
    let boops;

    if (!dev) {
        ps = context.platform.env.PROTOGEN_DB
            .prepare("SELECT Boops from Boops WHERE ProtoID = 1");
        boops = await ps.first("Boops");
    } else {
        boops = "(dev)";
    }

    return {
        boops
    };
}

export const actions = {
    boop: async (context) => {
        await context.platform?.env.PROTOGEN_DB
            .prepare("UPDATE Boops SET count = count + 1 WHERE id = 1")
            .run();
    }
} 