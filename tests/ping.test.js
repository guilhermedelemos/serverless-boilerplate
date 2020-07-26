import * as ping from '../src/handlers/ping'

test('handler result to be truthy', async () => {
    const result = await ping.handler({}, {});
    expect(result).toBeTruthy();
});