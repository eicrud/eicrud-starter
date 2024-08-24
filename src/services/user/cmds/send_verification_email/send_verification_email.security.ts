import { CmdSecurity, baseCmds } from "@eicrud/core/config";
import { User } from "../../user.entity";


const getCmdSecurity = (send_verification_email, user): CmdSecurity<CmdDto, User> => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.sendVerificationEmail.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const sendVerificationEmailSecurity = {
    getCmdSecurity,
}

class CmdDto extends baseCmds.sendVerificationEmail.dto {};
