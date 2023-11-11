import joplin from 'api';
import { MenuItemLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.views.menuItems.create('toggleEditorsMenuItem', 'toggleEditors', MenuItemLocation.View, { accelerator: 'CmdOrCtrl+G' });
	}
});
