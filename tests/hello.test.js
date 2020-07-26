import * as hello from '../src/handlers/hello'

test('handler result to be truthy', async () => {
    const result = await hello.handler({}, {});
    expect(result).toBeTruthy();
});