import { dev } from "$app/environment";

export async function load(context) {
    let ps;
    let boops;

    if (!dev) {
        ps = context.platform.env.PROTOGEN_DB.prepare("SELECT Boops from Boops WHERE ProtoID = 1");
        boops = await ps.first();
    } else {
        boops = 1;
    }

    return {
        boops
    };
}