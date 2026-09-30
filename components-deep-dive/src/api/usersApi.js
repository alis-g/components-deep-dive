const baseUrl = 'https://mjwdadmkprxoobcrtvzj.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_LVP7qrwB4p3YreIf-f19Iw_YST_YdAN'

export async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey
        }
    })

    const data = await response.json()
    return data
}