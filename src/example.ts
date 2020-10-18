
import { Readable } from "stream";
import * as streamlib from "datacell-streamlib";

main();

async function main() {
    const data_array = [
        "advertisement",
        "advise",
        "affect",
        "afraid",
        "after",
        "again",
        "against"];
    const data = data_array.join("\n");
    const r_stream: Readable = Readable.from(data)
        .pipe(new streamlib.Split())
        .pipe(new streamlib.Filter((elem: string) => {
            return elem.length <= 5;
        }))
        .pipe(new streamlib.Map((elem) => {
            return "@@" + elem;
        }));

    const result: string[] = await streamlib.streamToArray(r_stream);
    console.log(result);
}
