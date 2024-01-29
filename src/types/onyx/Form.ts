import type * as OnyxCommon from './OnyxCommon';

type FormValueType = string | boolean | Date;

type BaseForm = {
    /** Controls the loading state of the form */
    isLoading?: boolean;

    /** Server side errors keyed by microtime */
    errors?: OnyxCommon.Errors | null;

    /** Field-specific server side errors keyed by microtime */
    errorFields?: OnyxCommon.ErrorFields | null;
};

type Form<TFormValues extends Record<string, FormValueType> = Record<string, FormValueType>> = TFormValues & BaseForm;

type AddDebitCardForm = Form<{
    /** Whether the form has been submitted */
    setupComplete: boolean;
}>;

type DateOfBirthForm = Form<{
    /** Date of birth */
    dob?: string;
}>;

type DisplayNameForm = Form<{
    firstName: string;
    lastName: string;
}>;

type NewContactMethodForm = Form<{
    phoneOrEmail: string;
}>;

type NewRoomForm = Form<{
    roomName?: string;
    welcomeMessage?: string;
    policyID?: string;
    writeCapability?: string;
    visibility?: string;
}>;

type IKnowATeacherForm = Form<{
    firstName: string;
    lastName: string;
    partnerUserID: string;
}>;

type IntroSchoolPrincipalForm = Form<{
    firstName: string;
    lastName: string;
    partnerUserID: string;
}>;

type PrivateNotesForm = Form<{
    privateNotes: string;
}>;

export default Form;

export type {AddDebitCardForm, DateOfBirthForm, PrivateNotesForm, DisplayNameForm, FormValueType, NewContactMethodForm, NewRoomForm, BaseForm, IKnowATeacherForm, IntroSchoolPrincipalForm};
