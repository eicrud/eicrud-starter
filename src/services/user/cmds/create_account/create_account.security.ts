import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (create_account, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.createAccount.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const createAccountSecurity = {
    getCmdSecurity,
}