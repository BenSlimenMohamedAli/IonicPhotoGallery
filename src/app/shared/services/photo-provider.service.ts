import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Injectable({
	providedIn: 'root'
})
export class PhotoProviderService {
	public photos: Photo[] = [];

	constructor(private camera: Camera, private storage: Storage, private loadingService: LoadingService) {
		this.loadingService.present();
		this.storage.get('photos').then((photos) => {
			this.photos = photos || [];
			this.loadingService.dismiss();
		});
	}

	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		};
		this.loadingService.present();
		this.camera.getPicture(options).then(
			(imageData) => {
				// Add new photo to gallery
				this.photos.unshift({
					data: 'data:image/jpeg;base64,' + imageData
				});

				// Save all photos for later viewing
				this.storage.set('photos', this.photos);
				this.loadingService.dismiss();
			},
			(err) => {
				// Handle error
				console.log('Camera issue: ' + err);
				this.loadingService.dismiss();
			}
		);
	}

	deletePicture(index) {
		this.loadingService.present();
		this.photos.splice(index, 1);
		this.storage.set('photos', this.photos).then(() => {
			this.loadingService.dismiss();
		});
	}
}

class Photo {
	data: any;
}
