export = registerFCM;
declare function registerFCM({ senderId, token }: {
    senderId: any;
    token: any;
}): Promise<{
    keys: any;
    fcm: any;
}>;
