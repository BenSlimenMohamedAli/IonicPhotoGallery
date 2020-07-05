import { Component, OnInit } from '@angular/core';
import { PhotoProviderService } from 'src/app/shared/services/photo-provider.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.page.html',
	styleUrls: [ './gallery.page.scss' ]
})
export class GalleryPageComponent implements OnInit {
	constructor(public photoProviderService: PhotoProviderService) {}

	ngOnInit() {}
}
