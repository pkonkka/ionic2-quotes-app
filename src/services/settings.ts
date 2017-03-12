
export class SettingsService {

    private alternativeBackground = false;

    setBackground(state: boolean) {
        this.alternativeBackground = state;
    }

    getBackground(): boolean {
        return this.alternativeBackground;
    }

}