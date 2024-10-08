import { CrudSecurity } from "@eicrud/core/config";
import { serviceCmds } from "./cmds";
import { Email } from "./email.entity";

export function getSecurity(email: string): CrudSecurity<Email> { 
    return {
        rolesRights: {
            guest: {
                async defineCRUDAbility(can, cannot, ctx) {
                    // Define abilities for guest
                    
                }
            }
        },

        cmdSecurityMap: Object.keys(serviceCmds).reduce((acc, cmd) => {
            acc[cmd] = serviceCmds[cmd].getCmdSecurity(cmd, email); return acc;
        }, {})
    }
}