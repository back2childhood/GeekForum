import { request } from "@/utils";

export function loginAPI(fromData) {
    return request({
        url: '/authorizations',
        methods: 'POST',
        data: fromData
    })
}

export function getProfileAPI() {
    return request({
        url: '/user/profile',
        methods: 'GET'
    })
}