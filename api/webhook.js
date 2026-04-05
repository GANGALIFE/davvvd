export default async function handler(req, res) {
    try {
        const webhook = process.env.DISCORD_WEBHOOK_URL;

        const response = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body.mensaje)
        });

        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: "Error enviando a Discord" });
    }
}