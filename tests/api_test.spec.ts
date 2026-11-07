import { test, expect } from '@playwright/test'

test('API post request test', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });
    expect(response.status()).toBe(201);
    const text: string = await response.text();
    expect(text).toContain('morpheus');
    console.log(await response.json());
})

test('API put request test', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "shajid",
            "job": "Teacher"
        }
    });
    expect(response.status()).toBe(200);
    const text: string = await response.text();
    expect(text).toContain('shajid');
    console.log(await response.json());
})


test('API get request test', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text: string = await response.text();
    expect(text).toContain('janet');
    console.log(await response.json());
})

test('API Delete request test', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})